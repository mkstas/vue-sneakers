<script setup lang="ts">
import { PhotoIcon } from '@heroicons/vue/24/outline';
</script>

<template>
  <div class="space-y-2 animate-pulse">
    <div class="relative pb-[65%]">
      <div
        class="absolute w-full h-full object-contain flex items-center justify-center bg-slate-200 rounded-2xl"
      >
        <PhotoIcon class="w-14 h-14 stroke-slate-300" />
      </div>
    </div>
    <div class="h-[3.25rem] bg-slate-200 rounded-2xl"></div>
    <div class="flex gap-2">
      <div class="w-[2.375rem] h-[2.375rem] bg-slate-200 rounded-2xl"></div>
      <div class="h-[2.375rem] flex-1 bg-slate-200 rounded-2xl"></div>
    </div>
  </div>
</template>
