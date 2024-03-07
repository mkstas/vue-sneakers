<script setup lang="ts">
import { XMarkIcon } from '@heroicons/vue/24/outline';
import { useCartStore } from '@/entities/cart';

defineProps<{ productId: number }>();

const cartStore = useCartStore();
</script>

<template>
  <button
    @click="cartStore.remove(productId)"
    class="p-2 rounded-xl border border-neutral-200 group"
  >
    <XMarkIcon class="w-5 h-5 text-neutral-400 group-hover:text-red-600" />
  </button>
</template>
