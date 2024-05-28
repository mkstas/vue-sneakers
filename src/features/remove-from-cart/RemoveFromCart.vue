<script setup lang="ts">
import { useCartStore } from '@/entities/cart';

defineProps<{ goodId: number }>();

const cartStore = useCartStore();
</script>

<template>
  <button
    @click="cartStore.removeFromCart(goodId)"
    class="p-1 text-sm text-blue-600 hover:underline"
  >
    Удалить
  </button>
</template>
