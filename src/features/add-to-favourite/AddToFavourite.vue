<script setup lang="ts">
import { computed } from 'vue';
import { HeartIcon } from '@heroicons/vue/24/outline';
import { IGood } from '@/shared/interfaces';
import { useFavouritesStore } from '@/entities/favourites';

const props = defineProps<{ good: IGood; isFavourite: boolean }>();

const favouritesStore = useFavouritesStore();

const buttonClasses = computed(() => [
  'group p-2 border rounded-2xl',
  props.isFavourite
    ? 'border-red-200 bg-red-200 hover:bg-red-300 hover:border-red-300'
    : 'border-slate-300',
]);

const iconClasses = computed(() => [
  'w-5 h-5',
  props.isFavourite
    ? 'fill-red-400 stroke-red-400 group-hover:fill-red-500 group-hover:stroke-red-500'
    : 'stroke-slate-500 group-hover:fill-red-400 group-hover:stroke-red-400',
]);

const onClickButton = () => {
  props.isFavourite
    ? favouritesStore.removeFavorite(props.good.id)
    : favouritesStore.storeFavourite(props.good);
};
</script>

<template>
  <button @click="onClickButton" :class="buttonClasses">
    <HeartIcon :class="iconClasses" />
  </button>
</template>
