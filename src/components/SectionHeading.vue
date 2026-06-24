<script setup lang="ts">
defineProps<{
  title: string
  subtitle?: string
  light?: boolean
}>()
</script>

<template>
  <div class="mb-14 text-center">
    <h2
      class="text-3xl md:text-4xl font-bold mb-3 tracking-tight"
      :class="light ? 'text-white' : 'text-slate-800'"
    >
      {{ title }}
    </h2>
    <div class="w-16 h-1 bg-blue-500 mx-auto rounded-full mb-4" />
    <p
      v-if="subtitle"
      class="max-w-2xl mx-auto text-base leading-relaxed"
      :class="light ? 'text-slate-300' : 'text-slate-500'"
    >
      {{ subtitle }}
    </p>
  </div>
</template>
