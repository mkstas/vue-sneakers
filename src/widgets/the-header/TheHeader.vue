<script setup lang="ts">
import { computed } from 'vue';
import { RouterLink } from 'vue-router';
import { ShoppingCartIcon, HeartIcon } from '@heroicons/vue/24/outline';
import { useCartStore } from '@/entities/goods';

const emit = defineEmits(['open-drawer']);

const cartStore = useCartStore();

const fullPrice = computed(() =>
  cartStore.cart.reduce((price, current) => price + current.price, 0),
);
</script>

<template>
  <header class="p-2 sm:p-6 lg:p-10 flex flex-wrap items-center justify-between gap-x-10 gap-y-4">
    <RouterLink
      to="/"
      class="flex items-center gap-4 outline-none focus-visible:outline-neutral-800 rounded"
    >
      <img src="/icons/logo.png" alt="Логотип Vue Sneakers" width="40" height="40" />
      <div>
        <h2 class="text-xl font-bold uppercase">Vue Sneakers</h2>
        <p class="text-sm text-neutral-500">Магазин лучших кроссовок</p>
      </div>
    </RouterLink>
    <ul class="-mr-2 flex items-center gap-4">
      <li>
        <button
          @click="emit('open-drawer')"
          class="p-2 flex items-center gap-2 text-neutral-500 hover:text-green-600 outline-none focus-visible:outline-neutral-800 rounded"
        >
          <ShoppingCartIcon class="w-6 h-6" />
          <span class="font-medium">{{ fullPrice.toLocaleString('ru') }} руб.</span>
        </button>
      </li>
      <li>
        <RouterLink
          to="/favorite"
          class="p-2 flex items-center gap-2 text-neutral-500 hover:text-green-600 outline-none focus-visible:outline-neutral-800 rounded"
        >
          <HeartIcon class="w-6 h-6" />
          <span class="font-medium">Избранное</span>
        </RouterLink>
      </li>
    </ul>
  </header>
</template>
