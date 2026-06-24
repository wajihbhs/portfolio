<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { projects, type Project } from '@/data/cv'
import SectionHeading from './SectionHeading.vue'

const { t } = useI18n()

const selectedProject = ref<Project | null>(null)
const slideIndex = ref(0)
const direction = ref<'left' | 'right'>('right')
const touchStartX = ref(0)

const totalSlides = computed(() => selectedProject.value?.screenshots.length ?? 0)
const currentSrc = computed(() => selectedProject.value?.screenshots[slideIndex.value] ?? '')

function openProject(id: string) {
  selectedProject.value = projects.find(p => p.id === id) ?? null
  slideIndex.value = 0
}

function closeModal() {
  selectedProject.value = null
}

function goTo(index: number, dir: 'left' | 'right' = 'right') {
  if (!totalSlides.value) return
  direction.value = dir
  slideIndex.value = (index + totalSlides.value) % totalSlides.value
}

function prev() { goTo(slideIndex.value - 1, 'left') }
function next() { goTo(slideIndex.value + 1, 'right') }

function onKeydown(e: KeyboardEvent) {
  if (!selectedProject.value) return
  if (e.key === 'ArrowRight') next()
  if (e.key === 'ArrowLeft') prev()
  if (e.key === 'Escape') closeModal()
}

function onTouchStart(e: TouchEvent) {
  touchStartX.value = e.changedTouches[0]?.clientX ?? 0
}
function onTouchEnd(e: TouchEvent) {
  const dx = (e.changedTouches[0]?.clientX ?? 0) - touchStartX.value
  if (Math.abs(dx) > 40) dx < 0 ? next() : prev()
}

watch(selectedProject, () => { slideIndex.value = 0 })

onMounted(() => window.addEventListener('keydown', onKeydown))
onUnmounted(() => window.removeEventListener('keydown', onKeydown))
</script>

<template>
  <section id="projects" class="py-24 bg-slate-900">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading
        :title="t('projects.title')"
        :subtitle="t('projects.subtitle')"
        :light="true"
      />

      <!-- Cards grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <article
          v-for="project in projects"
          :key="project.id"
          class="group bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-blue-500/50 transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/10"
          @click="openProject(project.id)"
        >
          <div class="relative h-44 overflow-hidden">
            <img
              :src="project.screenshot"
              :alt="t(`cv.projects.${project.id}.title`)"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-800 via-transparent to-transparent" />
            <span class="absolute bottom-3 left-3 flex items-center gap-1 bg-black/50 backdrop-blur-sm text-white text-xs px-2 py-0.5 rounded-md">
              <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
              {{ project.screenshots.length }} photos
            </span>
            <a
              v-if="project.link"
              :href="project.link"
              target="_blank"
              rel="noopener noreferrer"
              class="absolute top-3 right-3 p-1.5 bg-blue-600/90 backdrop-blur-sm text-white rounded-md hover:bg-blue-500 transition-colors"
              @click.stop
            >
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
              </svg>
            </a>
          </div>

          <div class="p-5">
            <p class="text-blue-400 text-xs font-semibold mb-1">{{ project.company }} · {{ project.period }}</p>
            <h3 class="text-white font-bold leading-snug mb-2 group-hover:text-blue-300 transition-colors">
              {{ t(`cv.projects.${project.id}.title`) }}
            </h3>
            <p class="text-slate-400 text-sm line-clamp-2 mb-4 leading-relaxed">
              {{ t(`cv.projects.${project.id}.description`) }}
            </p>
            <div class="flex flex-wrap gap-1.5">
              <span
                v-for="tech in project.stack.slice(0, 4)"
                :key="tech"
                class="px-2 py-0.5 bg-slate-700 text-slate-300 text-xs rounded-md"
              >{{ tech }}</span>
              <span v-if="project.stack.length > 4" class="px-2 py-0.5 bg-slate-700 text-slate-400 text-xs rounded-md">
                +{{ project.stack.length - 4 }}
              </span>
            </div>
          </div>
        </article>
      </div>
    </div>

    <!-- ======================================================= -->
    <!-- MODAL                                                     -->
    <!-- ======================================================= -->
    <Transition name="fade-modal">
      <div
        v-if="selectedProject"
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        @click.self="closeModal"
      >
        <div class="bg-slate-800 rounded-2xl w-full max-w-3xl max-h-[92vh] overflow-y-auto border border-slate-700 shadow-2xl">

          <!-- ======= SLIDESHOW ======= -->
          <div
            class="relative overflow-hidden bg-black"
            style="height: 380px;"
            @touchstart.passive="onTouchStart"
            @touchend.passive="onTouchEnd"
          >
            <!-- Main image with crossfade -->
            <Transition :name="direction === 'right' ? 'slide-right' : 'slide-left'" mode="out-in">
              <img
                :key="slideIndex"
                :src="currentSrc"
                alt="screenshot"
                class="absolute inset-0 w-full h-full object-cover"
              />
            </Transition>

            <!-- Bottom gradient -->
            <div class="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/70 to-transparent pointer-events-none z-10" />

            <!-- Close -->
            <button
              @click="closeModal"
              class="absolute top-3 right-3 z-20 w-9 h-9 bg-black/50 hover:bg-black/80 text-white rounded-xl flex items-center justify-center transition-colors"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>

            <!-- Counter -->
            <span class="absolute top-3 left-3 z-20 bg-black/50 text-white text-xs font-semibold px-2.5 py-1 rounded-lg">
              {{ slideIndex + 1 }} / {{ totalSlides }}
            </span>

            <!-- Prev arrow -->
            <button
              v-if="totalSlides > 1"
              @click="prev"
              class="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-11 h-11 bg-black/50 hover:bg-black/80 text-white rounded-xl flex items-center justify-center transition-all hover:scale-110 active:scale-95"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7"/>
              </svg>
            </button>

            <!-- Next arrow -->
            <button
              v-if="totalSlides > 1"
              @click="next"
              class="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-11 h-11 bg-black/50 hover:bg-black/80 text-white rounded-xl flex items-center justify-center transition-all hover:scale-110 active:scale-95"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/>
              </svg>
            </button>

            <!-- Dot indicators -->
            <div
              v-if="totalSlides > 1"
              class="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2"
            >
              <button
                v-for="(_, i) in selectedProject!.screenshots"
                :key="i"
                @click="goTo(i, i > slideIndex ? 'right' : 'left')"
                :class="[
                  'rounded-full transition-all duration-300',
                  i === slideIndex ? 'w-6 h-2 bg-white' : 'w-2 h-2 bg-white/40 hover:bg-white/70'
                ]"
              />
            </div>

            <!-- Thumbnails -->
            <div
              v-if="totalSlides > 1"
              class="absolute bottom-0 inset-x-0 z-10 flex gap-2 px-4 pb-2 overflow-x-auto"
              style="scrollbar-width: none;"
            >
              <button
                v-for="(src, i) in selectedProject!.screenshots"
                :key="i"
                @click="goTo(i, i > slideIndex ? 'right' : 'left')"
                :class="[
                  'flex-shrink-0 w-16 h-11 rounded-lg overflow-hidden border-2 transition-all duration-200',
                  i === slideIndex ? 'border-blue-400 scale-105' : 'border-white/20 opacity-60 hover:opacity-90 hover:border-white/50'
                ]"
              >
                <img :src="src" class="w-full h-full object-cover" :alt="`thumb-${i}`" />
              </button>
            </div>
          </div>

          <!-- ======= INFO ======= -->
          <div class="p-6">
            <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
              <div>
                <p class="text-blue-400 text-xs font-semibold mb-1">{{ selectedProject!.company }} · {{ selectedProject!.period }}</p>
                <h2 class="text-white text-xl font-bold">
                  {{ t(`cv.projects.${selectedProject!.id}.title`) }}
                </h2>
                <p class="text-slate-400 text-sm mt-0.5">
                  {{ t(`cv.projects.${selectedProject!.id}.role`) }}
                </p>
              </div>
              <a
                v-if="selectedProject!.link"
                :href="selectedProject!.link"
                target="_blank"
                rel="noopener noreferrer"
                class="flex-shrink-0 inline-flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-xl transition-colors"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
                {{ t('projects.visit') }}
              </a>
            </div>

            <p class="text-slate-300 text-sm leading-relaxed mb-5">
              {{ t(`cv.projects.${selectedProject!.id}.description`) }}
            </p>

            <div class="flex flex-wrap gap-2">
              <span
                v-for="tech in selectedProject!.stack"
                :key="tech"
                class="px-2.5 py-1 bg-slate-700 text-slate-300 text-xs font-medium rounded-lg border border-slate-600"
              >{{ tech }}</span>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </section>
</template>

<style scoped>
/* Modal fade */
.fade-modal-enter-active,
.fade-modal-leave-active { transition: opacity 0.2s ease; }
.fade-modal-enter-from,
.fade-modal-leave-to { opacity: 0; }

/* Slide right (next) */
.slide-right-enter-active,
.slide-right-leave-active { transition: all 0.35s ease; position: absolute; width: 100%; height: 100%; }
.slide-right-enter-from  { transform: translateX(100%); opacity: 0; }
.slide-right-enter-to    { transform: translateX(0);    opacity: 1; }
.slide-right-leave-from  { transform: translateX(0);    opacity: 1; }
.slide-right-leave-to    { transform: translateX(-100%); opacity: 0; }

/* Slide left (prev) */
.slide-left-enter-active,
.slide-left-leave-active { transition: all 0.35s ease; position: absolute; width: 100%; height: 100%; }
.slide-left-enter-from  { transform: translateX(-100%); opacity: 0; }
.slide-left-enter-to    { transform: translateX(0);     opacity: 1; }
.slide-left-leave-from  { transform: translateX(0);     opacity: 1; }
.slide-left-leave-to    { transform: translateX(100%);  opacity: 0; }
</style>
