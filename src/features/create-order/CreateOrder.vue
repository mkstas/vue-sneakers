<script setup lang="ts">
import { ArrowRightIcon } from '@heroicons/vue/24/outline';
import { useCartStore } from '@/entities/product';

const cartStore = useCartStore();
</script>

<template>
  <button
    :disabled="cartStore.isLoadingOrder"
    @click="cartStore.order"
    class="w-full p-4 flex items-center justify-center gap-6 bg-green-600 disabled:bg-green-400 disabled:cursor-wait text-white rounded-xl group"
  >
    <span>Оформить заказ</span>
    <ArrowRightIcon class="w-5 h-5 group-hover:translate-x-1 transition-transform" />
  </button>
</template>
