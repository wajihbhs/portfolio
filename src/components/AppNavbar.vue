<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useActiveSection } from '@/composables/useActiveSection'

const { t, locale } = useI18n()
const isScrolled = ref(false)
const isMobileOpen = ref(false)

const sectionIds = ['hero', 'experience', 'education', 'skills', 'projects', 'languages', 'hobbies']
const navKeys = ['home', 'experience', 'education', 'skills', 'projects', 'languages', 'hobbies']
const { activeSection } = useActiveSection(sectionIds)

function onScroll() {
  isScrolled.value = window.scrollY > 60
}

function scrollTo(id: string) {
  isMobileOpen.value = false
  if (id) document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

function toggleLang() {
  locale.value = locale.value === 'fr' ? 'en' : 'fr'
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <nav
    :class="[
      'fixed top-0 inset-x-0 z-50 transition-all duration-300',
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5',
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
      <!-- Logo -->
      <button
        @click="scrollTo('hero')"
        class="font-bold text-lg tracking-tight transition-colors duration-300"
        :class="isScrolled ? 'text-slate-800' : 'text-white'"
      >
        WBS<span class="text-blue-500">.</span>
      </button>

      <!-- Desktop links -->
      <div class="hidden lg:flex items-center gap-1">
        <button
          v-for="(key, i) in navKeys"
          :key="key"
          @click="scrollTo(sectionIds[i] ?? '')"
          :class="[
            'px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200',
            activeSection === (sectionIds[i] ?? '')
              ? 'text-blue-500 bg-blue-50'
              : isScrolled
                ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                : 'text-white/80 hover:text-white hover:bg-white/10',
          ]"
        >
          {{ t(`nav.${key}`) }}
        </button>
      </div>

      <!-- Right side: lang switcher + mobile toggle -->
      <div class="flex items-center gap-3">
        <!-- Language switcher -->
        <button
          @click="toggleLang"
          :class="[
            'flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-semibold tracking-wide transition-all duration-200',
            isScrolled
              ? 'border-slate-200 text-slate-600 hover:border-blue-400 hover:text-blue-600'
              : 'border-white/30 text-white hover:border-white hover:bg-white/10',
          ]"
        >
          <span>{{ locale === 'fr' ? '🇫🇷' : '🇬🇧' }}</span>
          <span>{{ locale === 'fr' ? 'FR' : 'EN' }}</span>
          <svg class="w-3 h-3 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4M8 15l4 4 4-4" />
          </svg>
        </button>

        <!-- Mobile toggle -->
        <button
          @click="isMobileOpen = !isMobileOpen"
          class="lg:hidden p-2 rounded-lg"
          :class="isScrolled ? 'text-slate-700' : 'text-white'"
          aria-label="Menu"
        >
          <svg v-if="!isMobileOpen" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="isMobileOpen"
        class="lg:hidden absolute top-full inset-x-0 bg-white shadow-xl border-t border-slate-100 py-3 px-4"
      >
        <button
          v-for="(key, i) in navKeys"
          :key="key"
          @click="scrollTo(sectionIds[i] ?? '')"
          :class="[
            'w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors',
            activeSection === (sectionIds[i] ?? '')
              ? 'bg-blue-50 text-blue-600'
              : 'text-slate-700 hover:bg-slate-50',
          ]"
        >
          {{ t(`nav.${key}`) }}
        </button>
      </div>
    </Transition>
  </nav>
</template>
