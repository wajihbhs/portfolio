<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { educations } from '@/data/cv'
import SectionHeading from './SectionHeading.vue'

const { t } = useI18n()
</script>

<template>
  <section id="education" class="py-24 bg-slate-50">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading
        :title="t('education.title')"
        :subtitle="t('education.subtitle')"
      />

      <div class="grid md:grid-cols-3 gap-6">
        <article
          v-for="edu in educations"
          :key="edu.id"
          class="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-lg hover:border-blue-100 transition-all duration-300 group"
        >
          <div class="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
            <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
            </svg>
          </div>
          <span class="text-blue-500 text-xs font-semibold tracking-wider uppercase">{{ edu.period }}</span>
          <h3 class="text-slate-800 font-bold mt-1 mb-1">
            {{ t(`cv.educations.${edu.id}.degree`) }}
          </h3>
          <p class="text-blue-600 font-semibold text-sm mb-3">{{ edu.school }}</p>
          <p class="text-slate-500 text-sm leading-relaxed">
            {{ t(`cv.educations.${edu.id}.description`) }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>
