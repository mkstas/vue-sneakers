<script setup lang="ts">
import { AddToFavourite } from '@/features/add-to-favourite';
import { AddToCart } from '@/features/add-to-cart';
import { IProps } from './ProductCard.data';

defineProps<IProps>();
</script>

<template>
  <article
    class="px-4 py-2 sm:px-8 sm:py-6 border border-neutral-200 rounded-3xl relative hover:-translate-y-2 hover:shadow-xl hover:shadow-black/5 transition-all overflow-hidden"
  >
    <AddToFavourite class="absolute" :is-favourite="isFavourite" />
    <img src="/images/sneakers-1.jpg" alt="" class="px-4" />
    <h3 class="mt-4 text-sm lg:text-base">Мужские Кроссовки Nike Blazer Mid Suede</h3>
    <div class="mt-4 flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
      <div>
        <p class="text-xs sm:text-sm text-neutral-500">Цена:</p>
        <p class="sm:text-lg font-bold">12 999 руб.</p>
      </div>
      <AddToCart :is-added="isAdded" />
    </div>
  </article>
</template>
