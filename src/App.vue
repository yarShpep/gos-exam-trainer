<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'
import { DataAnalysis, Document, EditPen, House, User } from '@element-plus/icons-vue'

import { useAuthStore } from '@/stores/auth'
import { useExamStore } from '@/stores/exam'

const route = useRoute()
const authStore = useAuthStore()
const examStore = useExamStore()

const activePath = computed(() => route.path)
const userLabel = computed(() => authStore.displayName)

onMounted(() => {
  authStore.hydrate()
  examStore.hydrate()
})
</script>

<template>
  <el-container class="app-shell">
    <el-aside width="264px" class="app-sidebar">
      <RouterLink to="/" class="brand">
        <span class="brand-mark">Г</span>
        <span>
          <strong>ГОСы</strong>
          <small>тренажер вопросов</small>
        </span>
      </RouterLink>

      <el-menu :default-active="activePath" router class="nav-menu">
        <el-menu-item index="/">
          <el-icon><House /></el-icon>
          <span>Обзор</span>
        </el-menu-item>
        <el-menu-item index="/practice">
          <el-icon><EditPen /></el-icon>
          <span>Решение</span>
        </el-menu-item>
        <el-menu-item index="/materials">
          <el-icon><Document /></el-icon>
          <span>Материалы</span>
        </el-menu-item>
        <el-menu-item index="/stats">
          <el-icon><DataAnalysis /></el-icon>
          <span>Статистика</span>
        </el-menu-item>
      </el-menu>

      <div class="sidebar-footer">
        <el-icon><User /></el-icon>
        <div>
          <span>{{ userLabel }}</span>
          <RouterLink :to="authStore.currentUser ? '/profile' : '/login'">профиль</RouterLink>
        </div>
      </div>
    </el-aside>

    <el-container>
      <el-header class="mobile-header">
        <RouterLink to="/" class="brand compact">
          <span class="brand-mark">Г</span>
          <strong>ГОСы</strong>
        </RouterLink>
        <RouterLink :to="authStore.currentUser ? '/profile' : '/login'" class="mobile-user">{{ userLabel }}</RouterLink>
      </el-header>

      <main class="page-frame">
        <RouterView />
      </main>
    </el-container>

    <nav class="mobile-tabbar" aria-label="Основная навигация">
      <RouterLink to="/" class="mobile-tab" :class="{ active: activePath === '/' }">
        <el-icon><House /></el-icon>
        <span>Обзор</span>
      </RouterLink>
      <RouterLink to="/practice" class="mobile-tab" :class="{ active: activePath === '/practice' }">
        <el-icon><EditPen /></el-icon>
        <span>Решение</span>
      </RouterLink>
      <RouterLink to="/materials" class="mobile-tab" :class="{ active: activePath === '/materials' }">
        <el-icon><Document /></el-icon>
        <span>Материалы</span>
      </RouterLink>
      <RouterLink to="/stats" class="mobile-tab" :class="{ active: activePath === '/stats' }">
        <el-icon><DataAnalysis /></el-icon>
        <span>Стата</span>
      </RouterLink>
    </nav>
  </el-container>
</template>
