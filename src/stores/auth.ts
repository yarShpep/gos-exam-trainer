import { defineStore } from 'pinia'

import type { UserProfile } from '@/types/domain'
import { createId } from '@/utils/id'
import { loadJson, saveJson } from '@/utils/storage'

const AUTH_STORAGE_KEY = 'gos-exam-auth'
const LOGIN_PATTERN = /^[\x21-\x7E]+$/
const PASSWORD_PATTERN = /^[\x21-\x7E]+$/

interface AuthState {
  users: UserProfile[]
  currentUserId: string | null
}

interface LegacyUser {
  id: string
  name?: string
  login?: string
  password?: string
  role: 'registered' | 'guest'
  createdAt: string
  lastSeenAt: string
  firstName?: string
  lastName?: string
  groupName?: string
}

function normalizeLogin(login: string) {
  return login.trim().toLowerCase()
}

function migrateUser(user: LegacyUser): UserProfile {
  const login = user.login ?? user.name ?? 'user'

  return {
    id: user.id,
    login,
    password: user.password ?? '',
    firstName: user.firstName,
    lastName: user.lastName,
    groupName: user.groupName,
    role: 'registered',
    createdAt: user.createdAt,
    lastSeenAt: user.lastSeenAt,
  }
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    users: [],
    currentUserId: null,
  }),
  getters: {
    currentUser: (state) => state.users.find((user) => user.id === state.currentUserId) ?? null,
    ownerId(): string {
      return this.currentUser?.id ?? 'guest'
    },
    isGuest(): boolean {
      return !this.currentUser
    },
    displayName(): string {
      if (!this.currentUser) {
        return 'Гость'
      }

      const fullName = [this.currentUser.lastName, this.currentUser.firstName].filter(Boolean).join(' ')
      return fullName || this.currentUser.login
    },
  },
  actions: {
    hydrate() {
      const saved = loadJson<{ users: LegacyUser[]; currentUserId: string | null }>(AUTH_STORAGE_KEY, {
        users: [],
        currentUserId: null,
      })
      this.users = saved.users.filter((user) => user.role === 'registered').map(migrateUser)
      this.currentUserId = this.users.some((user) => user.id === saved.currentUserId) ? saved.currentUserId : null
      this.persist()
    },
    persist() {
      saveJson<AuthState>(AUTH_STORAGE_KEY, {
        users: this.users,
        currentUserId: this.currentUserId,
      })
    },
    validateLogin(login: string) {
      const value = login.trim()

      if (!value) {
        return 'Введите логин.'
      }

      if (!LOGIN_PATTERN.test(value)) {
        return 'Логин должен содержать только латиницу, цифры и ASCII-символы без пробелов.'
      }

      return ''
    },
    validatePassword(password: string) {
      if (!password) {
        return 'Введите пароль.'
      }

      if (!PASSWORD_PATTERN.test(password)) {
        return 'Пароль должен содержать только латиницу, цифры и ASCII-символы без пробелов.'
      }

      return ''
    },
    register(login: string, password: string) {
      const loginError = this.validateLogin(login)
      const passwordError = this.validatePassword(password)

      if (loginError || passwordError) {
        return loginError || passwordError
      }

      const normalizedLogin = normalizeLogin(login)

      if (this.users.some((user) => normalizeLogin(user.login) === normalizedLogin)) {
        return 'Такой логин уже занят.'
      }

      const now = new Date().toISOString()
      const user: UserProfile = {
        id: createId('user'),
        login: login.trim(),
        password,
        role: 'registered',
        createdAt: now,
        lastSeenAt: now,
      }

      this.users.push(user)
      this.currentUserId = user.id
      this.persist()
      return ''
    },
    login(login: string, password: string) {
      const normalizedLogin = normalizeLogin(login)
      const user = this.users.find((candidate) => normalizeLogin(candidate.login) === normalizedLogin)

      if (!user || user.password !== password) {
        return 'Неверный логин или пароль.'
      }

      user.lastSeenAt = new Date().toISOString()
      this.currentUserId = user.id
      this.persist()
      return ''
    },
    continueAsGuest() {
      this.currentUserId = null
      this.persist()
    },
    updateProfile(payload: { firstName: string; lastName: string; groupName: string }) {
      if (!this.currentUser) {
        return
      }

      this.currentUser.firstName = payload.firstName.trim()
      this.currentUser.lastName = payload.lastName.trim()
      this.currentUser.groupName = payload.groupName.trim()
      this.currentUser.lastSeenAt = new Date().toISOString()
      this.persist()
    },
    logout() {
      this.currentUserId = null
      this.persist()
    },
  },
})
