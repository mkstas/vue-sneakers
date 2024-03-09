<script setup lang="ts">
import { onMounted } from 'vue';
import { ArrowLeftIcon } from '@heroicons/vue/24/outline';
import { VOverlay, VSheet } from '@/shared/ui';
import { CreateOrder } from '@/features/create-order';
import { DrawerEmpty } from './drawer-empty';
import { DrawerProductCard } from './drawer-product-card';
import { DrawerProductCardSkeleton } from './drawer-product-card-skeleton';
import { DrawerSuccessOrder } from './drawer-success-order';
import { useDrawer } from './TheDrawer.data';

const { isLoading, cartStore, fetchData } = useDrawer();

const emit = defineEmits(['close-drawer']);

onMounted(async () => await fetchData());
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
        <template v-if="cartStore.products.length > 0 || isLoading">
          <div class="flex-1 space-y-4 overflow-y-auto">
            <template v-if="!isLoading">
              <DrawerProductCard v-for="product in cartStore.products" :product="product" />
            </template>
            <template v-else>
              <DrawerProductCardSkeleton v-for="(_, index) in Array(3).fill(1)" :key="index" />
            </template>
          </div>
          <CreateOrder />
        </template>
        <div
          v-if="cartStore.products.length <= 0 && !isLoading"
          class="h-full flex items-center justify-center"
        >
          <DrawerEmpty v-if="!cartStore.isOrdered" />
          <DrawerSuccessOrder v-else />
        </div>
      </section>
    </VSheet>
  </VOverlay>
</template>
