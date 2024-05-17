<script setup lang="ts">
import { computed } from 'vue';
import { HeartIcon } from '@heroicons/vue/24/outline';
import { IGood, useFavouritesStore } from '@/entities/goods';

const props = defineProps<{ good: IGood; isFavourite: boolean }>();

const buttonClasses = computed(() => [
  'p-2 rounded-xl border',
  props.isFavourite
    ? 'bg-red-200 border-red-200 outline-none focus-visible:outline-red-300'
    : 'group border-neutral-200 outline-none focus-visible:border-neutral-800',
]);

const iconClasses = computed(() => [
  'w-5 h-5 text-neutral-400',
  props.isFavourite
    ? 'fill-red-400 stroke-red-400'
    : 'group-hover:fill-red-400 group-hover:stroke-red-400',
]);

const favouriteStore = useFavouritesStore();

const onClick = () => {
  if (props.isFavourite) {
    return favouriteStore.removeFavorite(props.good.id);
  }

  return favouriteStore.storeFavourite(props.good);
};
</script>

<template>
  <button @click="onClick" :class="buttonClasses">
    <HeartIcon :class="iconClasses" />
  </button>
</template>
