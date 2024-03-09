<script setup lang="ts">
import { onMounted } from 'vue';
import { SearchField } from '@/features/search-field';
import { ProductCard } from '@/widgets/product-card';
import { ProductCardSkeleton } from '@/widgets/product-card-skeleton';
import { useCatalog } from './CatalogPage.data';

const { isLoading, catalogStore, fetchData } = useCatalog();

onMounted(async () => await fetchData());
</script>

<template>
  <section class="space-y-4 md:space-y-6 lg:space-y-10">
    <header class="max-sm:mt-3 flex flex-wrap justify-between gap-4 items-center">
      <h1 class="text-2xl md:text-3xl font-bold">Все кроссовки</h1>
      <SearchField />
    </header>
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-6 lg:gap-10">
      <template v-if="!isLoading">
        <ProductCard
          v-for="product in catalogStore.products"
          :key="product.id"
          :product="product"
        />
      </template>
      <template v-if="isLoading">
        <ProductCardSkeleton v-for="(_, index) in Array(8).fill(1)" :key="index" />
      </template>
    </div>
  </section>
</template>
