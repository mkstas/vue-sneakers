<script setup lang="ts">
import { ArrowLeftIcon } from '@heroicons/vue/24/outline';
import { VOverlay, VSheet } from '@/shared/ui';
import { CreateOrder } from '@/features/create-order';
import { DrawerEmpty } from './drawer-empty';
import { DrawerProductCard } from './drawer-product-card';
// import { DrawerSuccessOrder } from './drawer-success-order';
import { useCartStore } from '@/entities/goods';
import { computed } from 'vue';

const emit = defineEmits(['close-drawer']);

const cartStore = useCartStore();

const fullPrice = computed(() =>
  cartStore.cart.reduce((price, current) => price + current.price, 0),
);
</script>

<template>
  <VOverlay class="z-50">
    <VSheet class="ml-auto p-3 sm:p-6 lg:p-10 max-sm:pt-6 h-full w-full max-w-md">
      <section class="h-full flex flex-col gap-6">
        <header class="flex items-center gap-2 -ml-2 -mt-1">
          <button
            @click="emit('close-drawer')"
            class="p-2 group outline-none focus-visible:outline-neutral-800 rounded"
          >
            <ArrowLeftIcon class="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
          </button>
          <h2 class="text-2xl font-bold">Корзина</h2>
        </header>
        <template v-if="cartStore.cart.length > 0">
          <div class="flex-1 space-y-4 overflow-y-auto">
            <DrawerProductCard v-for="good in cartStore.cart" :good="good" />
          </div>
          <div class="flex justify-between gap-2">
            <p>Итого:</p>
            <div class="h-5 flex-1 border-b-2 border-dotted border-neutral-200"></div>
            <p class="font-bold">{{ fullPrice.toLocaleString('ru') }} руб.</p>
          </div>
          <CreateOrder />
        </template>
        <div v-else class="h-full flex items-center justify-center">
          <DrawerEmpty />
          <!-- <DrawerSuccessOrder /> -->
        </div>
      </section>
    </VSheet>
  </VOverlay>
</template>
