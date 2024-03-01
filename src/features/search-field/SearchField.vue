<script setup lang="ts">
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline';
</script>

<template>
  <div class="relative w-full max-w-80 flex items-center border border-neutral-200 rounded-xl">
    <MagnifyingGlassIcon class="w-5 h-5 absolute left-3 text-neutral-400" />
    <input type="text" placeholder="Найти..." class="pl-10 pr-4 py-2 w-full rounded-xl" />
  </div>
</template>
