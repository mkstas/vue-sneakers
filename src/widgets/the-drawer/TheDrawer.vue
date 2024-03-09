<script setup lang="ts">
import { ArrowLeftIcon } from '@heroicons/vue/24/outline';
import { VOverlay, VSheet } from '@/shared/ui';
import { useCartStore } from '@/entities/cart';
import { CreateOrder } from '@/features/create-order';
import { DrawerProductCard } from './drawer-product-card';
import { DrawerProductCardSkeleton } from './drawer-product-card-skeleton';
import { DrawerEmpty } from './drawer-empty';
import { DrawerSuccessOrder } from './drawer-success-order';

const cartStore = useCartStore();

const emit = defineEmits(['close-drawer']);
</script>

<template>
  <VOverlay class="z-50">
    <VSheet class="ml-auto p-3 sm:p-6 lg:p-10 max-sm:pt-6 h-full w-full max-w-md">
      <section class="h-full flex flex-col gap-4">
        <header class="flex items-center gap-2 -ml-2 -mt-1">
          <button @click="emit('close-drawer')" class="p-2 group">
            <ArrowLeftIcon class="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
          </button>
          <h2 class="text-2xl font-bold">Корзина</h2>
        </header>
        <div class="flex-1 space-y-4 overflow-y-auto">
          <DrawerProductCard v-for="product in cartStore.cart" :product="product" />
          <!-- <DrawerProductCardSkeleton v-for="(_, index) in Array(3).fill(1)" :key="index" /> -->
        </div>
        <CreateOrder />
        <!-- <div class="h-full flex items-center justify-center">
          <DrawerEmpty />
          <DrawerSuccessOrder />
        </div> -->
      </section>
    </VSheet>
  </VOverlay>
</template>
