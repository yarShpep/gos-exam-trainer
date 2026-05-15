import { defineStore } from 'pinia'

import { apiRequest } from '@/api/client'
import { studyMaterials } from '@/data/materials'
import { questionSections } from '@/data/questionBank'
import { useAuthStore } from '@/stores/auth'
import type {
  AnswerFeedbackMode,
  AttemptAnswer,
  ExamQuestion,
  QuestionSection,
  QuestionStat,
  StudyMaterial,
  TestDifficulty,
  TestAttempt,
} from '@/types/domain'
import { createId } from '@/utils/id'
import { loadJson, saveJson } from '@/utils/storage'

const EXAM_STORAGE_KEY = 'gos-exam-progress'
export const MAX_QUESTIONS_PER_TEST = 50
export const MIN_QUESTIONS_PER_SECTION = 5

function shuffleQuestions<T>(items: T[]) {
  const shuffled = [...items]

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1))
    const current = shuffled[index]
    shuffled[index] = shuffled[randomIndex]
    shuffled[randomIndex] = current
  }

  return shuffled
}

function sampleQuestions<T>(items: T[], count: number) {
  return shuffleQuestions(items).slice(0, count)
}

function getOptionIdsForDifficulty(question: ExamQuestion, difficulty: TestDifficulty) {
  if (difficulty === 'hard' || question.options.length <= 4) {
    return shuffleQuestions(question.options).map((option) => option.id)
  }

  const correctOption = question.options.find((option) => option.id === question.correctOptionId)
  const distractors = question.options.filter((option) => option.id !== question.correctOptionId)

  if (!correctOption) {
    return shuffleQuestions(question.options).slice(0, 4).map((option) => option.id)
  }

  return shuffleQuestions([correctOption, ...sampleQuestions(distractors, 3)]).map((option) => option.id)
}

interface ExamProgressState {
  attempts: TestAttempt[]
  questionStatsByOwner: Record<string, Record<string, QuestionStat>>
}

interface ExamState extends ExamProgressState {
  sections: QuestionSection[]
  materials: StudyMaterial[]
}

interface FinishAttemptOptions {
  saveStats?: boolean
  finishedEarly?: boolean
}

export const useExamStore = defineStore('exam', {
  state: (): ExamState => ({
    sections: questionSections,
    materials: studyMaterials,
    attempts: [],
    questionStatsByOwner: {},
  }),
  getters: {
    allQuestions: (state): ExamQuestion[] => state.sections.flatMap((section) => section.questions),
    completedAttempts: (state) => (ownerId: string) =>
      state.attempts.filter((attempt) => attempt.ownerId === ownerId && attempt.status === 'completed'),
    activeAttempt: (state) => (ownerId: string) =>
      state.attempts.find((attempt) => attempt.ownerId === ownerId && attempt.status === 'active') ?? null,
    questionById: (state) => (questionId: string) =>
      state.sections.flatMap((section) => section.questions).find((question) => question.id === questionId) ?? null,
    sectionById: (state) => (sectionId: string) => state.sections.find((section) => section.id === sectionId) ?? null,
  },
  actions: {
    async hydrate() {
      const authStore = useAuthStore()

      if (authStore.token && authStore.currentUser) {
        const saved = await apiRequest<{ attempts: TestAttempt[]; questionStats: Record<string, QuestionStat> }>(
          '/progress',
          {},
          authStore.token,
        )
        this.attempts = saved.attempts
        this.questionStatsByOwner = {
          [authStore.currentUser.id]: saved.questionStats,
        }
        return
      }

      const saved = loadJson<ExamProgressState & { questionStats?: Record<string, QuestionStat> }>(EXAM_STORAGE_KEY, {
        attempts: [],
        questionStatsByOwner: {},
      })
      this.attempts = saved.attempts
      this.questionStatsByOwner = saved.questionStatsByOwner ?? {
        guest: saved.questionStats ?? {},
      }
    },
    persist() {
      const authStore = useAuthStore()

      if (authStore.token && authStore.currentUser) {
        const userId = authStore.currentUser.id
        void apiRequest(
          '/progress',
          {
            method: 'PUT',
            body: JSON.stringify({
              attempts: this.attempts.filter((attempt) => attempt.ownerId === userId),
              questionStats: this.questionStatsByOwner[userId] ?? {},
            }),
          },
          authStore.token,
        )
        return
      }

      saveJson<ExamProgressState>(EXAM_STORAGE_KEY, {
        attempts: this.attempts.filter((attempt) => attempt.ownerId === 'guest'),
        questionStatsByOwner: this.questionStatsByOwner,
      })
    },
    getQuestionStats(ownerId: string) {
      return this.questionStatsByOwner[ownerId] ?? {}
    },
    getQuestionsForSection(sectionId: string | 'all') {
      if (sectionId === 'all') {
        return this.allQuestions
      }

      return this.sectionById(sectionId)?.questions ?? []
    },
    getGeneratedQuestionCount(sectionId: string | 'all') {
      return Math.min(this.getQuestionsForSection(sectionId).length, MAX_QUESTIONS_PER_TEST)
    },
    generateQuestionSet(sectionId: string | 'all') {
      if (sectionId !== 'all') {
        const questions = this.getQuestionsForSection(sectionId)
        return sampleQuestions(questions, Math.min(questions.length, MAX_QUESTIONS_PER_TEST))
      }

      const sectionsWithQuestions = this.sections.filter((section) => section.questions.length > 0)
      const selectedQuestions: ExamQuestion[] = []
      const selectedQuestionIds = new Set<string>()

      for (const section of sectionsWithQuestions) {
        const sectionMinimum = Math.min(MIN_QUESTIONS_PER_SECTION, section.questions.length)
        const questions = sampleQuestions(section.questions, sectionMinimum)

        for (const question of questions) {
          selectedQuestions.push(question)
          selectedQuestionIds.add(question.id)
        }
      }

      const remainingLimit = Math.max(0, MAX_QUESTIONS_PER_TEST - selectedQuestions.length)
      const remainingQuestions = sectionsWithQuestions
        .flatMap((section) => section.questions)
        .filter((question) => !selectedQuestionIds.has(question.id))

      selectedQuestions.push(...sampleQuestions(remainingQuestions, remainingLimit))

      const selectedBySection = new Map<string, ExamQuestion[]>()

      for (const question of selectedQuestions) {
        const questions = selectedBySection.get(question.sectionId) ?? []
        questions.push(question)
        selectedBySection.set(question.sectionId, questions)
      }

      return sectionsWithQuestions.flatMap((section) => shuffleQuestions(selectedBySection.get(section.id) ?? []))
    },
    startAttempt(ownerId: string, sectionId: string | 'all', mode: AnswerFeedbackMode, difficulty: TestDifficulty) {
      const questions = this.generateQuestionSet(sectionId)
      const optionOrderByQuestionId = Object.fromEntries(
        questions.map((question) => [question.id, getOptionIdsForDifficulty(question, difficulty)]),
      )

      this.attempts
        .filter((attempt) => attempt.ownerId === ownerId && attempt.status === 'active')
        .forEach((attempt) => {
          attempt.status = 'abandoned'
          attempt.updatedAt = new Date().toISOString()
        })

      const now = new Date().toISOString()
      const attempt: TestAttempt = {
        id: createId('attempt'),
        ownerId,
        sectionId,
        mode,
        difficulty,
        status: 'active',
        questionIds: questions.map((question) => question.id),
        optionOrderByQuestionId,
        currentIndex: 0,
        answers: [],
        startedAt: now,
        updatedAt: now,
      }

      this.attempts.unshift(attempt)
      this.persist()
      return attempt
    },
    answerQuestion(attemptId: string, questionId: string, selectedOptionId: string) {
      const attempt = this.attempts.find((candidate) => candidate.id === attemptId)
      const question = this.questionById(questionId)

      if (!attempt || !question || attempt.status !== 'active') {
        return
      }

      const now = new Date().toISOString()
      const existingAnswer = attempt.answers.find((answer) => answer.questionId === questionId)
      const isCorrect = selectedOptionId === question.correctOptionId

      if (existingAnswer) {
        existingAnswer.selectedOptionId = selectedOptionId
        existingAnswer.answeredAt = now
        if (attempt.mode === 'immediate' && !existingAnswer.checkedAt) {
          existingAnswer.isCorrect = isCorrect
          existingAnswer.checkedAt = now
        }
      } else {
        const answer: AttemptAnswer = {
          questionId,
          selectedOptionId,
          answeredAt: now,
        }

        if (attempt.mode === 'immediate') {
          answer.isCorrect = isCorrect
          answer.checkedAt = now
        }

        attempt.answers.push(answer)
      }

      attempt.updatedAt = now
      this.persist()
    },
    goToQuestion(attemptId: string, index: number) {
      const attempt = this.attempts.find((candidate) => candidate.id === attemptId)

      if (!attempt || index < 0 || index >= attempt.questionIds.length) {
        return
      }

      attempt.currentIndex = index
      attempt.updatedAt = new Date().toISOString()
      this.persist()
    },
    finishAttempt(attemptId: string, options: FinishAttemptOptions = {}) {
      const attempt = this.attempts.find((candidate) => candidate.id === attemptId)

      if (!attempt || attempt.status !== 'active') {
        return
      }

      const now = new Date().toISOString()
      const saveStats = options.saveStats ?? true

      attempt.answers.forEach((answer) => {
        const question = this.questionById(answer.questionId)

        if (!question) {
          return
        }

        if (!answer.checkedAt) {
          answer.isCorrect = answer.selectedOptionId === question.correctOptionId
          answer.checkedAt = now
        }
      })

      if (saveStats) {
        attempt.answers.forEach((answer) => {
          const question = this.questionById(answer.questionId)

          if (question) {
            this.recordQuestionStat(attempt.ownerId, question, answer, attempt.difficulty ?? 'hard')
          }
        })
        attempt.statsRecordedAt = now
      } else {
        attempt.statsSkippedAt = now
      }

      attempt.status = 'completed'
      attempt.completionReason = options.finishedEarly ? 'finished_early' : 'finished'
      attempt.currentIndex = attempt.questionIds.length - 1
      attempt.updatedAt = now
      attempt.completedAt = now
      this.persist()
    },
    clearStatistics(ownerId: string) {
      this.attempts = this.attempts.filter((attempt) => attempt.ownerId !== ownerId)
      this.questionStatsByOwner[ownerId] = {}
      this.persist()
    },
    recordQuestionStat(ownerId: string, question: ExamQuestion, answer: AttemptAnswer, difficulty: TestDifficulty) {
      const ownerStats = this.questionStatsByOwner[ownerId] ?? {}
      const current = ownerStats[question.id] ?? {
        questionId: question.id,
        totalAnswers: 0,
        correctAnswers: 0,
        optionHits: {},
      }

      current.totalAnswers += 1
      current.correctAnswers += answer.isCorrect ? 1 : 0
      current.optionHits[answer.selectedOptionId] = (current.optionHits[answer.selectedOptionId] ?? 0) + 1
      current.lastAnsweredAt = answer.checkedAt ?? answer.answeredAt
      const currentDifficulty = current.difficultyStats?.[difficulty] ?? {
        totalAnswers: 0,
        correctAnswers: 0,
        optionHits: {},
      }
      currentDifficulty.totalAnswers += 1
      currentDifficulty.correctAnswers += answer.isCorrect ? 1 : 0
      currentDifficulty.optionHits[answer.selectedOptionId] = (currentDifficulty.optionHits[answer.selectedOptionId] ?? 0) + 1
      currentDifficulty.lastAnsweredAt = answer.checkedAt ?? answer.answeredAt
      current.difficultyStats = {
        ...current.difficultyStats,
        [difficulty]: currentDifficulty,
      }
      ownerStats[question.id] = current
      this.questionStatsByOwner[ownerId] = ownerStats
    },
  },
})
