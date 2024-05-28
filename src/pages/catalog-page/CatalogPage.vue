<script setup lang="ts">
import { useGoodsStore } from '@/entities/goods';
import { SearchField } from '@/features/search-field';
import { GoodCard } from '@/widgets/good-card';
import { GoodCardSkeleton } from '@/widgets/good-card-skeleton';
import { CatalogPageEmpty } from './catalog-page-empty';

const goodsStore = useGoodsStore();
</script>

<template>
  <section class="space-y-8">
    <header class="sm:flex sm:justify-between sm:items-center sm:space-x-4 max-sm:space-y-2">
      <h1 class="text-2xl font-bold">Каталог</h1>
      <SearchField class="sm:max-w-80" />
    </header>
    <div
      v-if="goodsStore.isLoading"
      class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6"
    >
      <GoodCardSkeleton v-for="(_, key) in 8" :key="key" />
    </div>
    <template v-else>
      <div
        v-if="goodsStore.goods.length > 0"
        class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6"
      >
        <GoodCard v-for="good in goodsStore.goods" :key="good.id" :good="good" />
      </div>
      <CatalogPageEmpty v-else />
    </template>
  </section>
</template>
