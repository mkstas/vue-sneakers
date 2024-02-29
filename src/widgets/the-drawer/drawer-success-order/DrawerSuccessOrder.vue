<script setup lang="ts">
import { ArrowLeftIcon } from '@heroicons/vue/24/outline';
</script>

<template>
  <div class="text-center">
    <img src="/icons/order-success.png" alt="Заказ оформлен" class="w-28 mx-auto" />
    <p class="mt-4 text-xl font-bold text-green-600">Заказ оформлен!</p>
    <p class="mt-2 text-balance text-neutral-500">
      Ваш заказ скоро будет передан курьерской доставке
    </p>
    <button
      class="w-full max-w-60 mx-auto mt-10 p-4 flex items-center justify-center gap-6 bg-green-600 text-white rounded-xl group"
    >
      <ArrowLeftIcon class="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
      <span>Вернуться назад</span>
    </button>
  </div>
</template>
