<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { personalInfo } from '@/data/cv'

const { t, locale } = useI18n()

const cvUrl = computed(() => (locale.value === 'en' ? '/CV_EN.pdf' : '/CV_FR.pdf'))
const cvFilename = computed(() =>
  locale.value === 'en' ? 'CV-Wajih-EN.pdf' : 'CV-Wajih-FR.pdf',
)
</script>

<template>
  <section
    id="hero"
    class="relative min-h-screen flex items-center justify-center overflow-hidden"
  >
    <!-- Gradient background -->
    <div class="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900">
      <div
        class="absolute inset-0 opacity-5"
        style="background-image: radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0); background-size: 32px 32px;"
      />
    </div>

    <!-- Decorative blobs -->
    <div class="absolute top-1/4 -left-32 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
    <div class="absolute bottom-1/4 -right-32 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />

    <div class="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
      <div class="flex flex-col lg:flex-row items-center gap-14">

        <!-- Avatar -->
        <div class="flex-shrink-0 relative">
          <div class="relative w-44 h-60 md:w-52 md:h-72">
            <div class="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500 to-blue-700 blur-lg opacity-50 scale-110" />
            <img
              :src="personalInfo.photo"
              :alt="personalInfo.name"
              class="relative w-full h-full rounded-3xl object-cover object-top border-4 border-white/10 shadow-2xl"
            />
            <span class="absolute bottom-2 right-2 bg-green-500 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-lg ring-2 ring-white/20">
              {{ t('hero.openToWork') }}
            </span>
          </div>
        </div>

        <!-- Content -->
        <div class="flex-1 text-center lg:text-left">
          <p class="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">
            {{ t('cv.personalInfo.subtitle') }}
          </p>
          <h1 class="text-4xl md:text-5xl xl:text-6xl font-extrabold text-white mb-4 leading-tight">
            {{ personalInfo.name }}
          </h1>
          <p class="text-xl md:text-2xl text-slate-300 font-light mb-6">
            {{ t('cv.personalInfo.title') }}
          </p>
          <p class="text-slate-400 text-base md:text-lg leading-relaxed mb-8 max-w-2xl">
            {{ t('hero.summary') }}
          </p>

          <!-- Contact chips -->
          <div class="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
            <a
              :href="'mailto:' + personalInfo.email"
              class="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white px-4 py-2 rounded-full text-sm transition-all duration-200"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              {{ personalInfo.email }}
            </a>
            <a
              :href="'tel:' + personalInfo.phone"
              class="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white px-4 py-2 rounded-full text-sm transition-all duration-200"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              {{ personalInfo.phone }}
            </a>
            <span class="flex items-center gap-2 bg-white/5 border border-white/10 text-slate-300 px-4 py-2 rounded-full text-sm">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              {{ personalInfo.location }}
            </span>
          </div>

          <!-- CTAs -->
          <div class="flex flex-wrap justify-center lg:justify-start gap-4">
            <a
              :href="'https://' + personalInfo.linkedin"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5"
            >
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              LinkedIn
            </a>
            <a
              :href="'https://' + personalInfo.github"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5"
            >
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              GitHub
            </a>
            <a
              :href="cvUrl"
              :download="cvFilename"
              class="flex items-center gap-2 border border-white/20 text-white hover:bg-white/10 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
              {{ t('hero.downloadCv') }}
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll caret -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/30 animate-bounce">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  </section>
</template>
