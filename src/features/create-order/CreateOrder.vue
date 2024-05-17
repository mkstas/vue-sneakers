<script setup lang="ts">
import { ArrowRightIcon } from '@heroicons/vue/24/outline';
</script>

<template>
  <button
    class="w-full p-4 flex items-center justify-center gap-6 bg-green-600 disabled:bg-green-400 disabled:cursor-wait outline-none focus-visible:outline-green-500 text-white rounded-xl group"
  >
    <span>Оформить заказ</span>
    <ArrowRightIcon class="w-5 h-5 group-hover:translate-x-1 transition-transform" />
  </button>
</template>
