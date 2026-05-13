<script setup lang="ts">
import { computed, ref } from 'vue'
import { ArrowLeft, ArrowRight, Finished, RefreshRight, Select } from '@element-plus/icons-vue'

import { useAuthStore } from '@/stores/auth'
import { useExamStore } from '@/stores/exam'
import type { AnswerFeedbackMode, TestAttempt } from '@/types/domain'

const authStore = useAuthStore()
const examStore = useExamStore()

const selectedSectionId = ref<string | 'all'>('all')
const selectedMode = ref<AnswerFeedbackMode>('immediate')
const finishDialogVisible = ref(false)
const saveFinishedStats = ref(true)
const finishEarly = ref(false)
const answerLabels = ['а', 'б', 'в', 'г']

const ownerId = computed(() => authStore.ownerId)
const activeAttempt = computed(() => examStore.activeAttempt(ownerId.value))
const currentAttempt = ref<TestAttempt | null>(null)

const workingAttempt = computed(() => currentAttempt.value ?? activeAttempt.value)
const currentQuestion = computed(() => {
  const attempt = workingAttempt.value

  if (!attempt) {
    return null
  }

  return examStore.questionById(attempt.questionIds[attempt.currentIndex])
})
const currentSection = computed(() => {
  if (!currentQuestion.value) {
    return null
  }

  return examStore.sectionById(currentQuestion.value.sectionId)
})
const currentAnswer = computed(() => {
  const attempt = workingAttempt.value
  const question = currentQuestion.value

  if (!attempt || !question) {
    return null
  }

  return attempt.answers.find((answer) => answer.questionId === question.id) ?? null
})
const orderedOptions = computed(() => {
  const attempt = workingAttempt.value
  const question = currentQuestion.value

  if (!attempt || !question) {
    return []
  }

  const optionOrder = attempt.optionOrderByQuestionId?.[question.id] ?? question.options.map((option) => option.id)
  const optionsById = new Map(question.options.map((option) => [option.id, option]))

  return optionOrder
    .map((optionId) => optionsById.get(optionId))
    .filter((option) => option !== undefined)
    .map((option, index) => ({
      ...option,
      displayLabel: answerLabels[index] ?? `${index + 1}`,
    }))
})
const selectedOptionId = computed({
  get() {
    return currentAnswer.value?.selectedOptionId ?? ''
  },
  set(value: string) {
    const attempt = workingAttempt.value
    const question = currentQuestion.value

    if (!attempt || !question) {
      return
    }

    examStore.answerQuestion(attempt.id, question.id, value)
  },
})
const progressPercent = computed(() => {
  const attempt = workingAttempt.value

  if (!attempt || attempt.questionIds.length === 0) {
    return 0
  }

  return Math.round(((attempt.currentIndex + 1) / attempt.questionIds.length) * 100)
})
const selectedQuestionCount = computed(() => examStore.getGeneratedQuestionCount(selectedSectionId.value))
const result = computed(() => {
  const attempt = workingAttempt.value

  if (!attempt || attempt.answers.length === 0) {
    return { correct: 0, total: 0 }
  }

  const checked = attempt.answers.filter((answer) => answer.checkedAt)
  return {
    correct: checked.filter((answer) => answer.isCorrect).length,
    total: checked.length,
  }
})

function startAttempt() {
  currentAttempt.value = examStore.startAttempt(ownerId.value, selectedSectionId.value, selectedMode.value)
}

function startSectionAttempt(sectionId: string) {
  selectedSectionId.value = sectionId
  startAttempt()
}

function restartAttempt() {
  currentAttempt.value = examStore.startAttempt(ownerId.value, selectedSectionId.value, selectedMode.value)
}

function resumeAttempt() {
  currentAttempt.value = activeAttempt.value
}

function goPrevious() {
  const attempt = workingAttempt.value

  if (attempt) {
    examStore.goToQuestion(attempt.id, attempt.currentIndex - 1)
  }
}

function goNext() {
  const attempt = workingAttempt.value

  if (attempt) {
    examStore.goToQuestion(attempt.id, attempt.currentIndex + 1)
  }
}

const finishDialogTitle = computed(() => (finishEarly.value ? 'Завершить тест досрочно' : 'Завершить тест'))

function openFinishDialog(isEarly: boolean) {
  saveFinishedStats.value = true
  finishEarly.value = isEarly
  finishDialogVisible.value = true
}

function finishAttempt() {
  const attempt = workingAttempt.value

  if (!attempt) {
    return
  }

  examStore.finishAttempt(attempt.id, {
    finishedEarly: finishEarly.value,
    saveStats: saveFinishedStats.value,
  })
  finishDialogVisible.value = false
}
</script>

<template>
  <section class="page">
    <div class="page-heading">
      <div>
        <p class="eyebrow">Тестирование</p>
        <h1>Решение вопросов</h1>
      </div>
    </div>

    <el-card v-if="!workingAttempt" shadow="never" class="setup-card">
      <div class="setup-grid compact">
        <el-form-item label="Проверка ответов">
          <el-radio-group v-model="selectedMode" class="mode-toggle">
            <el-radio value="immediate" border>Сразу</el-radio>
            <el-radio value="deferred" border>После всех вопросов</el-radio>
          </el-radio-group>
        </el-form-item>
      </div>

      <el-alert type="info" show-icon :closable="false" title="Вопросы и варианты ответов перемешиваются при старте каждой новой попытки." />

      <div class="button-row">
        <el-button type="primary" size="large" :icon="Select" :disabled="selectedQuestionCount === 0" @click="startAttempt">
          Итоговый тест по всем темам: {{ selectedQuestionCount }} вопросов
        </el-button>
        <el-button v-if="activeAttempt" size="large" @click="resumeAttempt">Продолжить попытку</el-button>
      </div>

      <div class="section-picker">
        <el-card v-for="section in examStore.sections" :key="section.id" shadow="never" class="section-option">
          <span>Тема {{ section.order }}</span>
          <strong>{{ section.title.replace(/^Тема\s+\d+\.\s*/, '').replace(/:\s*100 тестовых вопросов$/, '') }}</strong>
          <small>Случайных вопросов: {{ examStore.getGeneratedQuestionCount(section.id) }}</small>
          <el-button type="primary" plain :icon="Select" @click="startSectionAttempt(section.id)">Решать раздел</el-button>
        </el-card>
      </div>
    </el-card>

    <el-empty
      v-if="!workingAttempt && examStore.allQuestions.length === 0"
      description="База вопросов пока пустая. Добавьте разделы и вопросы в src/data/questionBank.ts."
    />

    <template v-if="workingAttempt?.status === 'active' && currentQuestion">
      <div class="attempt-toolbar">
        <div>
          <strong>Вопрос {{ workingAttempt.currentIndex + 1 }} из {{ workingAttempt.questionIds.length }}</strong>
          <span>
            {{ currentSection?.title }}
            ·
            {{ workingAttempt.mode === 'immediate' ? 'Проверка сразу' : 'Проверка после завершения' }}
          </span>
        </div>
        <div class="toolbar-actions">
          <el-button class="mobile-early-finish" :icon="Finished" @click="openFinishDialog(true)">Завершить</el-button>
          <el-button :icon="RefreshRight" @click="restartAttempt">Начать заново</el-button>
        </div>
      </div>

      <el-progress :percentage="progressPercent" :show-text="false" />

      <el-card shadow="never" class="question-card">
        <h2>{{ currentQuestion.text }}</h2>

        <el-radio-group
          v-model="selectedOptionId"
          class="answers-list"
          :disabled="workingAttempt.mode === 'immediate' && Boolean(currentAnswer?.checkedAt)"
        >
          <el-radio
            v-for="option in orderedOptions"
            :key="option.id"
            :value="option.id"
            border
            class="answer-option"
          >
            <strong>{{ option.displayLabel }}</strong>
            <span>{{ option.text }}</span>
          </el-radio>
        </el-radio-group>

        <el-alert
          v-if="workingAttempt.mode === 'immediate' && currentAnswer?.checkedAt"
          :type="currentAnswer.isCorrect ? 'success' : 'error'"
          show-icon
          :closable="false"
          :title="currentAnswer.isCorrect ? 'Верно' : 'Неверно'"
          :description="currentQuestion.explanation || 'Пояснение будет показано после заполнения вопроса.'"
        />
      </el-card>

      <div class="attempt-actions">
        <el-button :icon="ArrowLeft" :disabled="workingAttempt.currentIndex === 0" @click="goPrevious">
          Назад
        </el-button>
        <el-button class="desktop-early-finish" :icon="Finished" @click="openFinishDialog(true)">Завершить досрочно</el-button>
        <div class="spacer" />
        <el-button
          v-if="workingAttempt.currentIndex < workingAttempt.questionIds.length - 1"
          type="primary"
          :icon="ArrowRight"
          :disabled="!currentAnswer"
          @click="goNext"
        >
          Далее
        </el-button>
        <el-button v-else type="primary" :disabled="!currentAnswer" @click="openFinishDialog(false)">Завершить</el-button>
      </div>
    </template>

    <el-dialog v-model="finishDialogVisible" :title="finishDialogTitle" width="460px">
      <p class="muted">Выберите, учитывать ли данные ответы в статистике по вопросам.</p>

      <el-radio-group v-model="saveFinishedStats" class="finish-options">
        <el-radio :value="true" border>Сохранить статистику по отвеченным вопросам</el-radio>
        <el-radio :value="false" border>Завершить без записи статистики</el-radio>
      </el-radio-group>

      <template #footer>
        <el-button @click="finishDialogVisible = false">Отмена</el-button>
        <el-button type="primary" @click="finishAttempt">Завершить</el-button>
      </template>
    </el-dialog>

    <el-result
      v-if="workingAttempt?.status === 'completed'"
      icon="success"
      title="Попытка завершена"
      :sub-title="`Проверено ответов: ${result.total}. Верных: ${result.correct}.`"
    >
      <template #extra>
        <el-button type="primary" @click="restartAttempt">Начать новую</el-button>
      </template>
    </el-result>
  </section>
</template>
