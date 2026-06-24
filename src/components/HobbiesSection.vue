<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { hobbies } from '@/data/cv'
import SectionHeading from './SectionHeading.vue'

const { t } = useI18n()

const iconSvg: Record<string, string> = {
  chess: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 3h6M12 3v4m-3 0h6M7 21h10M8 17h8M9 7v5a3 3 0 006 0V7"/>`,
  swim: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 18c1.5 0 2.5-1 4-1s2.5 1 4 1 2.5-1 4-1 2.5 1 4 1M12 14a4 4 0 100-8 4 4 0 000 8z"/>`,
  fish: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8c-3 0-6 2-8 4 2 2 5 4 8 4 3 0 7-2 8-4-1-2-5-4-8-4zm0 2a2 2 0 110 4 2 2 0 010-4zm4 2h2m-10 0H4"/>`,
}
</script>

<template>
  <section id="hobbies" class="py-24 bg-white">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading :title="t('hobbies.title')" :subtitle="t('hobbies.subtitle')" />

      <div class="grid grid-cols-3 gap-6 max-w-lg mx-auto">
        <article
          v-for="hobby in hobbies"
          :key="hobby.icon"
          class="group bg-slate-50 hover:bg-blue-50 border border-slate-100 hover:border-blue-200 rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1 cursor-default"
        >
          <div class="w-14 h-14 rounded-full bg-white shadow-sm group-hover:shadow-md flex items-center justify-center mx-auto mb-4 transition-all duration-300">
            <svg class="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" v-html="iconSvg[hobby.icon]" />
          </div>
          <p class="font-semibold text-slate-700 group-hover:text-blue-700 text-sm transition-colors">
            {{ t(`cv.hobbies.${hobby.icon}.name`) }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>
