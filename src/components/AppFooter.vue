<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { personalInfo } from '@/data/cv'

const { t } = useI18n()
const year = new Date().getFullYear()
</script>

<template>
  <footer class="bg-slate-900 border-t border-slate-800 py-12">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-3 gap-8 mb-10">
        <!-- Brand -->
        <div>
          <span class="text-2xl font-bold text-white">WBS<span class="text-blue-500">.</span></span>
          <p class="text-slate-400 text-sm mt-3 leading-relaxed">
            {{ t('cv.personalInfo.title') }}<br />
            {{ t('cv.personalInfo.subtitle') }}
          </p>
        </div>

        <!-- Contact -->
        <div>
          <h3 class="text-white font-semibold mb-4">Contact</h3>
          <div class="space-y-2.5">
            <a :href="'mailto:' + personalInfo.email" class="flex items-center gap-2.5 text-slate-400 hover:text-white text-sm transition-colors">
              <svg class="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              {{ personalInfo.email }}
            </a>
            <a :href="'tel:' + personalInfo.phone" class="flex items-center gap-2.5 text-slate-400 hover:text-white text-sm transition-colors">
              <svg class="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              {{ personalInfo.phone }}
            </a>
          </div>
        </div>

        <!-- Social -->
        <div>
          <h3 class="text-white font-semibold mb-4">Réseaux</h3>
          <div class="flex gap-3">
            <a
              :href="'https://' + personalInfo.linkedin"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              class="w-10 h-10 bg-slate-800 hover:bg-blue-600 border border-slate-700 hover:border-blue-600 text-slate-300 hover:text-white rounded-xl flex items-center justify-center transition-all duration-200"
            >
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a
              :href="'https://' + personalInfo.github"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              class="w-10 h-10 bg-slate-800 hover:bg-slate-600 border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white rounded-xl flex items-center justify-center transition-all duration-200"
            >
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
          </div>
        </div>
      </div>

      <div class="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500 text-xs">
        <p>
          © {{ year }} {{ personalInfo.name }} · {{ t('footer.rights') }}
        </p>
        <p class="flex items-center gap-1">
          {{ t('footer.madeWith') }}
          <svg class="w-3.5 h-3.5 text-red-500 mx-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z"/></svg>
          Vue.js
        </p>
      </div>
    </div>
  </footer>
</template>
