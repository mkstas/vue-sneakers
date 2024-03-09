<script setup lang="ts">
import { onMounted } from 'vue';
import { RouterLink } from 'vue-router';
import { ArrowLeftIcon } from '@heroicons/vue/24/outline';
import { ProductCard } from '@/widgets/product-card';
import { ProductCardSkeleton } from '@/widgets/product-card-skeleton';
import { FavouriteEmpty } from './favourite-empty';
import { useFavouritePage } from './FavouritePage.data';

const { isLoading, favouriteStore, fetchData } = useFavouritePage();

onMounted(async () => await fetchData());
</script>

<template>
  <section class="space-y-4 md:space-y-6 lg:space-y-10">
    <header class="max-sm:mt-2 -ml-2 flex flex-wrap md:gap-4 items-center">
      <RouterLink to="/" class="p-2 group block">
        <ArrowLeftIcon class="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
      </RouterLink>
      <h1 class="text-2xl md:text-3xl font-bold">Избранное</h1>
    </header>
    <div
      v-if="favouriteStore.products.length > 0"
      class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-6 lg:gap-10"
    >
      <template v-if="!isLoading">
        <ProductCard v-for="product in favouriteStore.products" :product="product" />
      </template>
      <template v-if="isLoading">
        <ProductCardSkeleton v-for="(_, index) in Array(4).fill(1)" :key="index" />
      </template>
    </div>
    <FavouriteEmpty v-else />
  </section>
</template>
