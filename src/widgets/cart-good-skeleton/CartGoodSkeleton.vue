<script setup lang="ts">
import { PhotoIcon } from '@heroicons/vue/24/outline';
</script>

<template>
  <div class="flex items-center gap-4">
    <div class="flex items-center justify-center w-20 h-16 bg-slate-200 rounded-2xl animate-pulse">
      <PhotoIcon class="w-8 h-8 stroke-slate-300" />
    </div>
    <div class="flex-1 grid grid-cols-[auto_1fr_auto] items-center gap-4">
      <div class="w-28 h-6 bg-slate-200 rounded-2xl animate-pulse"></div>
      <div class="self-end mb-1 border-b border-dashed border-slate-200"></div>
      <div class="w-16 h-[3.25rem] bg-slate-200 rounded-2xl animate-pulse"></div>
    </div>
  </div>
</template>
