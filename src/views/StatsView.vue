<script setup lang="ts">
import { computed, ref } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { Delete } from '@element-plus/icons-vue'
import { use } from 'echarts/core'
import { BarChart, PieChart } from 'echarts/charts'
import { GridComponent, LegendComponent, TooltipComponent } from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'
import VChart from 'vue-echarts'

import { useAuthStore } from '@/stores/auth'
import { useExamStore } from '@/stores/exam'
import type { AnswerFeedbackMode, AttemptStatus, TestAttempt } from '@/types/domain'

use([CanvasRenderer, BarChart, PieChart, GridComponent, TooltipComponent, LegendComponent])

const authStore = useAuthStore()
const examStore = useExamStore()

const activeTopSections = ref<string[]>(['attempts', 'charts'])
const activeSections = ref<string[]>([])
const ownerQuestionStats = computed(() => examStore.getQuestionStats(authStore.ownerId))

const statusLabels: Record<AttemptStatus, string> = {
  active: 'В процессе',
  completed: 'Завершена',
  abandoned: 'Заменена новой',
}
const statusTypes: Record<AttemptStatus, 'primary' | 'success' | 'warning'> = {
  active: 'primary',
  completed: 'success',
  abandoned: 'warning',
}
const modeLabels: Record<AnswerFeedbackMode, string> = {
  immediate: 'Проверка сразу',
  deferred: 'Проверка после всех вопросов',
}

const ownerAttempts = computed(() => examStore.attempts.filter((attempt) => attempt.ownerId === authStore.ownerId))
const sectionStats = computed(() =>
  examStore.sections.map((section) => {
    const questionRows = section.questions.map((question) => {
      const stat = ownerQuestionStats.value[question.id]
      const totalAnswers = stat?.totalAnswers ?? 0
      const correctAnswers = stat?.correctAnswers ?? 0

      return {
        questionId: question.id,
        order: question.order,
        questionText: question.text,
        totalAnswers,
        correctAnswers,
        accuracy: totalAnswers === 0 ? 0 : Math.round((correctAnswers / totalAnswers) * 100),
        lastAnsweredAt: stat?.lastAnsweredAt ?? '',
      }
    })
    const answeredQuestions = questionRows.filter((row) => row.totalAnswers > 0).length
    const totalAnswers = questionRows.reduce((sum, row) => sum + row.totalAnswers, 0)
    const correctAnswers = questionRows.reduce((sum, row) => sum + row.correctAnswers, 0)
    const attempts = ownerAttempts.value.filter((attempt) => {
      if (attempt.sectionId === section.id) {
        return true
      }

      if (attempt.sectionId !== 'all') {
        return false
      }

      return attempt.questionIds.some((questionId) => questionId.startsWith(`${section.id}-`))
    })

    return {
      section,
      questionRows,
      summary: {
        questionsTotal: section.questions.length,
        answeredQuestions,
        totalAnswers,
        correctAnswers,
        wrongAnswers: totalAnswers - correctAnswers,
        accuracy: totalAnswers === 0 ? 0 : Math.round((correctAnswers / totalAnswers) * 100),
        attemptsTotal: attempts.length,
        completedAttempts: attempts.filter((attempt) => attempt.status === 'completed').length,
      },
    }
  }),
)
const totalCorrectAnswers = computed(() => sectionStats.value.reduce((sum, group) => sum + group.summary.correctAnswers, 0))
const totalWrongAnswers = computed(() => sectionStats.value.reduce((sum, group) => sum + group.summary.wrongAnswers, 0))
const shortSectionNames = computed(() => sectionStats.value.map((group) => `Тема ${group.section.order}`))
const sectionAccuracyChart = computed(() => ({
  tooltip: { trigger: 'axis' },
  grid: { left: 36, right: 18, top: 16, bottom: 30 },
  xAxis: { type: 'category', data: shortSectionNames.value },
  yAxis: { type: 'value', max: 100 },
  series: [
    {
      name: 'Точность, %',
      type: 'bar',
      data: sectionStats.value.map((group) => group.summary.accuracy),
      itemStyle: { color: '#0156bc', borderRadius: [6, 6, 0, 0] },
    },
  ],
}))
const sectionAnswersChart = computed(() => ({
  tooltip: { trigger: 'axis' },
  legend: { bottom: 0 },
  grid: { left: 36, right: 18, top: 16, bottom: 48 },
  xAxis: { type: 'category', data: shortSectionNames.value },
  yAxis: { type: 'value' },
  series: [
    {
      name: 'Верно',
      type: 'bar',
      stack: 'answers',
      data: sectionStats.value.map((group) => group.summary.correctAnswers),
      itemStyle: { color: '#16a34a' },
    },
    {
      name: 'Ошибки',
      type: 'bar',
      stack: 'answers',
      data: sectionStats.value.map((group) => group.summary.wrongAnswers),
      itemStyle: { color: '#dc2626' },
    },
  ],
}))
const answerRatioChart = computed(() => ({
  tooltip: { trigger: 'item' },
  legend: { bottom: 0 },
  series: [
    {
      name: 'Ответы',
      type: 'pie',
      radius: ['45%', '70%'],
      center: ['50%', '45%'],
      data: [
        { value: totalCorrectAnswers.value, name: 'Верно', itemStyle: { color: '#16a34a' } },
        { value: totalWrongAnswers.value, name: 'Ошибки', itemStyle: { color: '#dc2626' } },
      ],
    },
  ],
}))
const attemptsStatusChart = computed(() => ({
  tooltip: { trigger: 'axis' },
  grid: { left: 36, right: 18, top: 16, bottom: 30 },
  xAxis: { type: 'category', data: ['В процессе', 'Завершены', 'Заменены'] },
  yAxis: { type: 'value' },
  series: [
    {
      name: 'Попытки',
      type: 'bar',
      data: [
        ownerAttempts.value.filter((attempt) => attempt.status === 'active').length,
        ownerAttempts.value.filter((attempt) => attempt.status === 'completed').length,
        ownerAttempts.value.filter((attempt) => attempt.status === 'abandoned').length,
      ],
      itemStyle: { color: '#0156bc', borderRadius: [6, 6, 0, 0] },
    },
  ],
}))

function formatDate(value?: string) {
  if (!value) {
    return '—'
  }

  return new Intl.DateTimeFormat('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(value))
}

function getSectionLabel(sectionId: string | 'all') {
  if (sectionId === 'all') {
    return 'Все темы'
  }

  const section = examStore.sectionById(sectionId)
  return section ? `Тема ${section.order}` : sectionId
}

function getAttemptStatsLabel(attempt: TestAttempt) {
  if (attempt.statsRecordedAt) {
    return 'Учтена'
  }

  if (attempt.statsSkippedAt) {
    return 'Не учитывалась'
  }

  return attempt.status === 'completed' ? 'Нет данных' : 'Еще не завершена'
}

async function clearStatistics() {
  try {
    await ElMessageBox.confirm('Будут удалены попытки и статистика по вопросам в этом браузере.', 'Очистить статистику?', {
      confirmButtonText: 'Очистить',
      cancelButtonText: 'Отмена',
      type: 'warning',
    })
    examStore.clearStatistics(authStore.ownerId)
    activeSections.value = []
    ElMessage.success('Статистика очищена')
  } catch {
    // User cancelled.
  }
}
</script>

<template>
  <section class="page">
    <div class="page-heading">
      <div>
        <p class="eyebrow">Прогресс</p>
        <h1>Статистика</h1>
      </div>
      <el-button type="danger" plain :icon="Delete" @click="clearStatistics">Очистить статистику</el-button>
    </div>

    <el-collapse v-model="activeTopSections" class="stats-collapse">
      <el-collapse-item name="attempts">
        <template #title>
          <div class="stats-section-title">
            <strong>Попытки</strong>
            <span>{{ ownerAttempts.length }} записей</span>
          </div>
        </template>

        <el-table :data="ownerAttempts" empty-text="Попыток пока нет">
          <el-table-column label="Статус" width="150">
            <template #default="{ row }">
              <el-tag :type="statusTypes[row.status as AttemptStatus]">{{ statusLabels[row.status as AttemptStatus] }}</el-tag>
            </template>
          </el-table-column>
          <el-table-column label="Режим" width="230">
            <template #default="{ row }">{{ modeLabels[row.mode as AnswerFeedbackMode] }}</template>
          </el-table-column>
          <el-table-column label="Раздел" width="130">
            <template #default="{ row }">{{ getSectionLabel(row.sectionId) }}</template>
          </el-table-column>
          <el-table-column label="Статистика" width="150">
            <template #default="{ row }">{{ getAttemptStatsLabel(row) }}</template>
          </el-table-column>
          <el-table-column label="Начата">
            <template #default="{ row }">{{ formatDate(row.startedAt) }}</template>
          </el-table-column>
          <el-table-column label="Завершена">
            <template #default="{ row }">{{ formatDate(row.completedAt) }}</template>
          </el-table-column>
        </el-table>
      </el-collapse-item>

      <el-collapse-item name="charts">
        <template #title>
          <div class="stats-section-title">
            <strong>Графики</strong>
            <span>4 диаграммы</span>
          </div>
        </template>

        <div class="charts-grid">
          <div class="chart-panel">
            <h2>Точность по темам</h2>
            <VChart class="chart" :option="sectionAccuracyChart" autoresize />
          </div>
          <div class="chart-panel">
            <h2>Верные и ошибочные ответы</h2>
            <VChart class="chart" :option="sectionAnswersChart" autoresize />
          </div>
          <div class="chart-panel">
            <h2>Соотношение ответов</h2>
            <VChart class="chart" :option="answerRatioChart" autoresize />
          </div>
          <div class="chart-panel">
            <h2>Попытки по статусам</h2>
            <VChart class="chart" :option="attemptsStatusChart" autoresize />
          </div>
        </div>
      </el-collapse-item>
    </el-collapse>

    <el-collapse v-model="activeSections" class="stats-collapse">
      <el-collapse-item v-for="group in sectionStats" :key="group.section.id" :name="group.section.id">
        <template #title>
          <div class="stats-section-title">
            <strong>{{ group.section.title }}</strong>
            <span>{{ group.summary.answeredQuestions }} / {{ group.summary.questionsTotal }} вопросов</span>
          </div>
        </template>

        <div class="metric-grid stats-metrics">
          <el-card shadow="never" class="metric-card">
            <span>Ответов</span>
            <strong>{{ group.summary.totalAnswers }}</strong>
          </el-card>
          <el-card shadow="never" class="metric-card">
            <span>Верных</span>
            <strong>{{ group.summary.correctAnswers }}</strong>
          </el-card>
          <el-card shadow="never" class="metric-card">
            <span>Точность</span>
            <strong>{{ group.summary.accuracy }}%</strong>
          </el-card>
          <el-card shadow="never" class="metric-card">
            <span>Завершено попыток</span>
            <strong>{{ group.summary.completedAttempts }}</strong>
          </el-card>
        </div>

        <el-table :data="group.questionRows" empty-text="Статистика появится после ответов">
          <el-table-column prop="order" label="#" width="72" />
          <el-table-column prop="questionText" label="Вопрос" min-width="360" />
          <el-table-column prop="totalAnswers" label="Ответов" width="110" />
          <el-table-column prop="correctAnswers" label="Верных" width="100" />
          <el-table-column prop="accuracy" label="Точность" width="120">
            <template #default="{ row }">{{ row.accuracy }}%</template>
          </el-table-column>
          <el-table-column label="Последний ответ" width="170">
            <template #default="{ row }">{{ formatDate(row.lastAnsweredAt) }}</template>
          </el-table-column>
        </el-table>
      </el-collapse-item>
    </el-collapse>
  </section>
</template>
