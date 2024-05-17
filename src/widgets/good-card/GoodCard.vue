<script setup lang="ts">
import { computed } from 'vue';
import { SERVER_API } from '@/shared/config/constants';
import { IGood, useCartStore, useFavouritesStore } from '@/entities/goods';
import { AddToFavourite } from '@/features/add-to-favourite';
import { AddToCart } from '@/features/add-to-cart';

const props = defineProps<{ good: IGood }>();

const favouritesStore = useFavouritesStore();
const cartStore = useCartStore();

const isFavourite = computed(
  () => !!favouritesStore.favourites.find(good => good.id === props.good.id),
);

const isAdded = computed(() => !!cartStore.cart.find(good => good.id === props.good.id));
</script>

<template>
  <article
    class="px-4 py-2 sm:px-8 sm:py-6 flex flex-col border border-neutral-200 rounded-3xl relative hover:-translate-y-2 hover:shadow-xl hover:shadow-black/5 transition-all overflow-hidden"
  >
    <AddToFavourite class="absolute z-10" :good="good" :is-favourite="isFavourite" />
    <div class="px-4 relative pb-[70%]">
      <img
        class="absolute top-0 left-0 w-full h-full object-contain"
        :src="`${SERVER_API}/${good.image}`"
        :alt="good.title"
        width="204"
        height="142"
      />
    </div>
    <h3 class="mt-4 flex-1 text-sm lg:text-base">{{ good.title }}</h3>
    <div class="mt-4 flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
      <div>
        <p class="text-xs sm:text-sm text-neutral-500">Цена:</p>
        <p class="sm:text-lg font-bold">{{ good.price.toLocaleString('ru') }} руб.</p>
      </div>
      <AddToCart :good="good" :is-added="isAdded" />
    </div>
  </article>
</template>
