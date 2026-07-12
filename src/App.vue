<script setup lang="ts">
import { watch } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import AppNavbar from './components/AppNavbar.vue'
import HeroSection from './components/HeroSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import EducationSection from './components/EducationSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import LanguagesSection from './components/LanguagesSection.vue'
import HobbiesSection from './components/HobbiesSection.vue'
import AppFooter from './components/AppFooter.vue'

const { locale } = useI18n()
const route = useRoute()

watch(
  () => route.path,
  (path) => {
    locale.value = path === '/en' ? 'en' : 'fr'
  },
  { immediate: true },
)
</script>

<template>
  <div class="antialiased">
    <AppNavbar />
    <main>
      <HeroSection />
      <ExperienceSection />
      <EducationSection />
      <SkillsSection />
      <ProjectsSection />
      <LanguagesSection />
      <HobbiesSection />
    </main>
    <AppFooter />
  </div>
</template>
