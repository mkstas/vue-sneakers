<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { ArrowLeftIcon } from '@heroicons/vue/24/outline';
</script>

<template>
  <div class="flex items-center justify-center">
    <div class="w-full max-w-72 text-center">
      <img src="/icons/emoji-1.png" alt="" class="w-20 mx-auto" />
      <p class="mt-4 text-xl font-bold">Закладок нет :(</p>
      <p class="mt-2 text-balance text-neutral-500">Вы ничего не добавляли в закладки</p>
      <RouterLink
        to="/"
        class="w-full mt-10 p-4 flex items-center justify-center gap-6 bg-green-600 text-white rounded-xl group"
      >
        <ArrowLeftIcon class="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        <span>Вернуться назад</span>
      </RouterLink>
    </div>
  </div>
</template>
