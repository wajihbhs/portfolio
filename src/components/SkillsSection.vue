<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { skillCategories } from '@/data/cv'
import SectionHeading from './SectionHeading.vue'

const { t } = useI18n()
const animated = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => { if (entry?.isIntersecting) animated.value = true },
    { threshold: 0.2 }
  )
  const el = document.getElementById('skills')
  if (el) observer.observe(el)
})
</script>

<template>
  <section id="skills" class="py-24 bg-white">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading :title="t('skills.title')" :subtitle="t('skills.subtitle')" />

      <div class="grid md:grid-cols-3 gap-8">
        <div
          v-for="category in skillCategories"
          :key="category.id"
          class="bg-slate-50 rounded-2xl p-6 border border-slate-100"
        >
          <h3 class="font-bold text-slate-800 text-sm uppercase tracking-widest mb-5 flex items-center gap-2">
            <span class="w-6 h-0.5 bg-blue-500 rounded-full inline-block" />
            {{ t(category.labelKey) }}
          </h3>
          <div class="space-y-4">
            <div v-for="skill in category.skills" :key="skill.name">
              <div class="flex justify-between items-center mb-1.5">
                <span class="text-sm font-medium text-slate-700">{{ skill.name }}</span>
                <span class="text-xs text-blue-600 font-semibold">{{ skill.level }}%</span>
              </div>
              <div class="h-1.5 bg-slate-200 rounded-full overflow-hidden">
                <div
                  class="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full transition-all duration-1000 ease-out"
                  :style="{ width: animated ? skill.level + '%' : '0%' }"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
