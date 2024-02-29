<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { ArrowLeftIcon } from '@heroicons/vue/24/outline';
import { ProductCard } from '@/widgets/product-card';
import { FavouriteEmpty } from './favourite-empty';
</script>

<template>
  <section class="space-y-4 md:space-y-6 lg:space-y-10">
    <header class="max-sm:mt-2 -ml-2 flex flex-wrap md:gap-4 items-center">
      <RouterLink to="/" class="p-2 group block">
        <ArrowLeftIcon
          class="w-6 h-6 md:w-8 md:h-8 group-hover:-translate-x-1 transition-transform"
        />
      </RouterLink>
      <h1 class="text-2xl md:text-3xl font-bold">Избранное</h1>
    </header>
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-6 lg:gap-10">
      <ProductCard :is-favourite="true" :is-added="false" />
      <ProductCard :is-favourite="true" :is-added="false" />
    </div>
    <!-- <FavouriteEmpty /> -->
  </section>
</template>
