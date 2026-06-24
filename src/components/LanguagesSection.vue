<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { languages } from '@/data/cv'
import SectionHeading from './SectionHeading.vue'

const { t } = useI18n()
</script>

<template>
  <section id="languages" class="py-24 bg-slate-50">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading :title="t('languages.title')" :subtitle="t('languages.subtitle')" />

      <div class="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
        <article
          v-for="lang in languages"
          :key="lang.name"
          class="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-100 transition-all duration-300 text-center group"
        >
          <div class="text-4xl mb-3">{{ lang.flag }}</div>
          <h3 class="font-bold text-slate-800 text-lg mb-1">{{ lang.name }}</h3>
          <p class="text-slate-500 text-sm mb-4">
            {{ t(`cv.languages.${lang.id}.level`) }}
          </p>
          <div class="h-1.5 bg-slate-100 rounded-full overflow-hidden">
            <div
              class="h-full bg-blue-500 rounded-full transition-all duration-1000"
              :style="{ width: lang.proficiency + '%' }"
            />
          </div>
          <p class="text-xs text-blue-500 font-semibold mt-1.5">{{ lang.proficiency }}%</p>
        </article>
      </div>
    </div>
  </section>
</template>
