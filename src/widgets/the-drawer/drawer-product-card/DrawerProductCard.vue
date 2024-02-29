<script setup lang="ts">
import { XMarkIcon } from '@heroicons/vue/24/outline';
</script>

<template>
  <article
    class="p-5 flex items-center gap-5 border border-neutral-200 rounded-2xl overflow-hidden"
  >
    <img src="/images/sneakers-1.jpg" alt="" class="h-16" />
    <div class="space-y-1 w-auto">
      <h3 class="text-sm">Мужские Кроссовки Nike Air Max 270</h3>
      <p class="font-bold">12 999 руб.</p>
    </div>
    <button class="p-2 rounded-xl border border-neutral-200 group">
      <XMarkIcon class="w-5 h-5 text-neutral-400 group-hover:text-red-600" />
    </button>
  </article>
</template>
