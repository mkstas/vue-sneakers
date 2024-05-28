<script setup lang="ts">
import { ArrowLeftIcon } from '@heroicons/vue/24/outline';
import { CATALOG_PAGE_ROUTE } from '@/shared/config/constants';
import { useFavouritesStore } from '@/entities/favourites';
import { GoodCard } from '@/widgets/good-card';
import { GoodCardSkeleton } from '@/widgets/good-card-skeleton';
import { FavouritesPageEmpty } from './favourites-page-empty';

const favouritesStore = useFavouritesStore();
</script>

<template>
  <section class="space-y-8">
    <header class="flex items-center gap-2 -ml-2">
      <RouterLink :to="CATALOG_PAGE_ROUTE" class="group p-2">
        <ArrowLeftIcon class="w-6 h-6 group-hover:-translate-x-2 transition-transform" />
      </RouterLink>
      <h1 class="text-2xl font-bold">Избранное</h1>
    </header>
    <div
      v-if="favouritesStore.isLoading"
      class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6"
    >
      <GoodCardSkeleton v-for="(_, key) in 4" :key="key" />
    </div>
    <template v-else>
      <div
        v-if="favouritesStore.goods.length > 0"
        class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6"
      >
        <GoodCard v-for="good in favouritesStore.goods" :key="good.id" :good="good" />
      </div>
      <FavouritesPageEmpty v-else />
    </template>
  </section>
</template>
