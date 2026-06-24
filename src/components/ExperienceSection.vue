<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { experiences } from '@/data/cv'
import SectionHeading from './SectionHeading.vue'

const { t, tm, rt } = useI18n()
</script>

<template>
  <section id="experience" class="py-24 bg-white">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading
        :title="t('experience.title')"
        :subtitle="t('experience.subtitle')"
      />

      <div class="relative">
        <!-- Timeline vertical line -->
        <div class="absolute left-8 top-0 bottom-0 w-px bg-slate-100 hidden md:block" />

        <div class="space-y-10">
          <article
            v-for="exp in experiences"
            :key="exp.id"
            class="relative flex gap-6 md:gap-10 group"
          >
            <!-- Timeline dot -->
            <div class="hidden md:flex flex-col items-center">
              <div
                class="w-4 h-4 rounded-full border-2 border-blue-500 bg-white mt-6 z-10 group-hover:bg-blue-500 transition-colors duration-300 flex-shrink-0 ml-6"
              />
            </div>

            <!-- Card -->
            <div class="flex-1 bg-slate-50 hover:bg-white border border-slate-100 hover:border-blue-100 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-all duration-300">
              <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                <div>
                  <h3 class="text-lg font-bold text-slate-800">
                    {{ t(`cv.experiences.${exp.id}.title`) }}
                  </h3>
                  <div class="flex items-center gap-2 mt-1">
                    <a
                      :href="exp.website"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="text-blue-600 font-semibold hover:underline text-sm"
                    >
                      {{ exp.company }}
                    </a>
                    <span class="text-slate-300">·</span>
                    <span class="text-slate-500 text-sm">{{ exp.location }}</span>
                  </div>
                </div>
                <span class="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full whitespace-nowrap flex-shrink-0">
                  <span class="w-1.5 h-1.5 rounded-full bg-blue-400 inline-block" />
                  {{ exp.period }}
                </span>
              </div>

              <p class="text-slate-600 mb-4 leading-relaxed text-sm">
                {{ t(`cv.experiences.${exp.id}.description`) }}
              </p>

              <ul class="space-y-1.5 mb-5">
                <li
                  v-for="(item, i) in tm(`cv.experiences.${exp.id}.responsibilities`)"
                  :key="i"
                  class="flex items-start gap-2 text-slate-600 text-sm"
                >
                  <span class="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 flex-shrink-0" />
                  {{ rt(item) }}
                </li>
              </ul>

              <!-- Stack -->
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tech in exp.stack"
                  :key="tech"
                  class="px-2.5 py-0.5 bg-white border border-slate-200 text-slate-600 text-xs font-medium rounded-md"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
