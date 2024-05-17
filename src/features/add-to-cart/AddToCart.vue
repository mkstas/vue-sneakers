<script setup lang="ts">
import { computed } from 'vue';
import { CheckIcon, PlusIcon } from '@heroicons/vue/24/outline';
import { IGood, useCartStore } from '@/entities/goods';

const props = defineProps<{ good: IGood; isAdded: boolean }>();

const buttonClasses = computed(() => [
  'p-2 rounded-xl border',
  props.isAdded
    ? 'bg-green-600 border-green-600 outline-none focus-visible:outline-green-500'
    : 'group border-neutral-200 outline-none focus-visible:border-neutral-800',
]);

const cartStore = useCartStore();

const onClick = () => {
  if (props.isAdded) {
    return cartStore.removeFromCart(props.good.id);
  }

  return cartStore.storeToCart(props.good);
};
</script>

<template>
  <button @click="onClick" :class="buttonClasses">
    <CheckIcon v-if="isAdded" class="w-5 h-5 text-white" />
    <PlusIcon v-else class="w-5 h-5 text-neutral-400 group-hover:text-green-600" />
  </button>
</template>
