import { ref, onMounted, onUnmounted } from 'vue'

export function useActiveSection(sectionIds: string[]) {
  const activeSection = ref<string>(sectionIds[0] ?? '')

  function onScroll() {
    const scrollY = window.scrollY + 120
    for (const id of [...sectionIds].reverse()) {
      const el = document.getElementById(id)
      if (el && el.offsetTop <= scrollY) {
        activeSection.value = id
        return
      }
    }
  }

  onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
  onUnmounted(() => window.removeEventListener('scroll', onScroll))

  return { activeSection }
}
