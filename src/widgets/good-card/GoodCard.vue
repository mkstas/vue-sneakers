<script setup lang="ts">
import { computed } from 'vue';
import { IGood } from '@/shared/interfaces';
import { SERVER_API } from '@/shared/config/constants';
import { useCartStore } from '@/entities/cart';
import { useFavouritesStore } from '@/entities/favourites';
import { AddToFavourite } from '@/features/add-to-favourite';
import { AddToCart } from '@/features/add-to-cart';

const props = defineProps<{ good: IGood }>();

const cartStore = useCartStore();
const favouritesStore = useFavouritesStore();

const isAdded = computed(() => !!cartStore.goods.find(good => good.id === props.good.id));
const isFavourite = computed(() => !!favouritesStore.goods.find(good => good.id === props.good.id));
</script>

<template>
  <article class="flex flex-col space-y-2">
    <div class="relative pb-[65%]">
      <img
        class="absolute w-full h-full object-contain rounded-2xl"
        :src="`${SERVER_API}/${good.image}`"
        :alt="good.title"
        width="204"
        height="142"
      />
    </div>
    <div class="flex-1 space-y-1">
      <h3>{{ good.title }}</h3>
      <p class="font-medium">{{ good.price.toLocaleString('ru') }} руб.</p>
    </div>
    <div class="flex gap-2">
      <AddToFavourite :good="good" :is-favourite="isFavourite" />
      <AddToCart :good="good" :is-added="isAdded" class="flex-1 flex justify-center" />
    </div>
  </article>
</template>
