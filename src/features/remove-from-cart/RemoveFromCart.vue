<script setup lang="ts">
import { XMarkIcon } from '@heroicons/vue/24/outline';
import { useCartStore } from '@/entities/goods';

defineProps<{ goodId: number }>();

const cartStore = useCartStore();
</script>

<template>
  <button
    @click="cartStore.removeFromCart(goodId)"
    class="group p-2 rounded-xl border border-neutral-200 outline-none focus-visible:border-neutral-800"
  >
    <XMarkIcon class="w-5 h-5 text-neutral-400 group-hover:text-red-600" />
  </button>
</template>
