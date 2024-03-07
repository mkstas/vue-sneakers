<script setup lang="ts">
import { computed } from 'vue';
import { CheckIcon, PlusIcon } from '@heroicons/vue/24/outline';
import { useCartStore } from '@/entities/cart';
import { IProps } from './AddToCart.data';

const props = defineProps<IProps>();

const buttonClasses = computed(() => [
  'p-2 rounded-xl border',
  props.isAdded ? 'bg-green-600 border-green-600' : 'border-neutral-200 group',
]);

const cartStore = useCartStore();

const onClick = () => {
  if (props.isAdded) {
    return cartStore.remove(props.product.id);
  }

  return cartStore.store(props.product);
};
</script>

<template>
  <button @click="onClick" :class="buttonClasses">
    <CheckIcon v-if="isAdded" class="w-5 h-5 text-white" />
    <PlusIcon v-else class="w-5 h-5 text-neutral-400 group-hover:text-green-600" />
  </button>
</template>
