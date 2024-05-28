<script setup lang="ts">
import { HeartIcon, ShoppingBagIcon } from '@heroicons/vue/24/outline';
import { CART_PAGE_ROUTE, FAVOURITES_PAGE_ROUTE } from '@/shared/config/constants';
import { useCartStore } from '@/entities/cart';

const cartStore = useCartStore();
</script>

<template>
  <nav
    class="fixed w-full left-0 bottom-0 z-50 bg-white shadow-[0_-20px_35px_-5px_rgba(100,116,139,0.05)] rounded-t-2xl"
  >
    <ul class="flex">
      <li class="flex-1">
        <RouterLink
          :to="CART_PAGE_ROUTE"
          class="p-4 flex items-center justify-center gap-2 text-slate-500 hover:text-green-600"
        >
          <ShoppingBagIcon class="w-6 h-6" />
          <span
            v-if="cartStore.isLoading"
            class="block h-6 w-20 bg-slate-200 animate-pulse rounded-2xl"
          ></span>
          <span v-else class="font-medium">{{ cartStore.fullPrice }} руб.</span>
        </RouterLink>
      </li>
      <li class="flex-1">
        <RouterLink
          :to="FAVOURITES_PAGE_ROUTE"
          class="p-4 flex items-center justify-center gap-2 text-slate-500 hover:text-green-600"
        >
          <HeartIcon class="w-6 h-6" />
          <span class="font-medium">Избранное</span>
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>
