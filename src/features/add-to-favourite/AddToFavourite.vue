<script setup lang="ts">
import { computed } from 'vue';
import { HeartIcon } from '@heroicons/vue/24/outline';
import { IProduct, useFavouriteStore } from '@/entities/product';

const props = defineProps<{ product: IProduct; isFavourite: boolean }>();

const buttonClasses = computed(() => [
  'p-2 rounded-xl border',
  props.isFavourite ? 'bg-red-200 border-red-200' : 'border-neutral-200 group',
]);

const iconClasses = computed(() => [
  'w-5 h-5 text-neutral-400',
  props.isFavourite
    ? 'fill-red-400 stroke-red-400'
    : 'group-hover:fill-red-400 group-hover:stroke-red-400',
]);

const favouriteStore = useFavouriteStore();

const onClick = () => {
  try {
    if (props.isFavourite) {
      return favouriteStore.remove(props.product.id);
    }

    return favouriteStore.store(props.product);
  } catch (error) {
    console.log(error);
  }
};
</script>

<template>
  <button @click="onClick" :class="buttonClasses">
    <HeartIcon :class="iconClasses" />
  </button>
</template>
