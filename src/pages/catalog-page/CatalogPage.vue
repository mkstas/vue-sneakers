<script setup lang="ts">
import { useCatalogStore } from '@/entities/goods';
// import { SearchField } from '@/features/search-field';
import { GoodCard } from '@/widgets/good-card';
import { GoodCardSkeleton } from '@/widgets/good-card-skeleton';

const catalogStore = useCatalogStore();
</script>

<template>
  <section class="space-y-4 md:space-y-6 lg:space-y-10">
    <header class="max-sm:mt-3 flex flex-wrap justify-between gap-4 items-center">
      <h1 class="text-2xl md:text-3xl font-bold">Все кроссовки</h1>
      <!-- <SearchField /> -->
    </header>
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-6 lg:gap-10">
      <template v-if="!catalogStore.isLoading">
        <GoodCard v-for="good in catalogStore.goods" :key="good.id" :good="good" />
      </template>
      <template v-if="catalogStore.isLoading">
        <GoodCardSkeleton v-for="(_, index) in Array(8).fill(1)" :key="index" />
      </template>
    </div>
  </section>
</template>
