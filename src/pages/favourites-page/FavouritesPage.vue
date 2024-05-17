<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { ArrowLeftIcon } from '@heroicons/vue/24/outline';
import { useFavouritesStore } from '@/entities/goods';
import { GoodCard } from '@/widgets/good-card';
import { FavouritesEmpty } from './favourites-empty';

const favouriteStores = useFavouritesStore();
</script>

<template>
  <section class="space-y-4 md:space-y-6 lg:space-y-10">
    <header class="max-sm:mt-2 -ml-2 flex flex-wrap md:gap-4 items-center">
      <RouterLink
        to="/"
        class="p-2 group block outline-none focus-visible:outline-neutral-800 rounded"
      >
        <ArrowLeftIcon class="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
      </RouterLink>
      <h1 class="text-2xl md:text-3xl font-bold">Избранное</h1>
    </header>
    <div
      v-if="favouriteStores.favourites.length > 0"
      class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-6 lg:gap-10"
    >
      <GoodCard v-for="good in favouriteStores.favourites" :good="good" />
    </div>
    <FavouritesEmpty v-else />
  </section>
</template>
