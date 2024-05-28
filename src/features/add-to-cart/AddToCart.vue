<script setup lang="ts">
import { computed } from 'vue';
import { CheckIcon, ShoppingBagIcon } from '@heroicons/vue/24/outline';
import { IGood } from '@/shared/interfaces';
import { useCartStore } from '@/entities/cart';

const props = defineProps<{ good: IGood; isAdded: boolean }>();

const cartStore = useCartStore();

const buttonClasses = computed(() => [
  'p-2 border rounded-2xl',
  props.isAdded ? 'border-green-600 bg-green-600 hover:bg-green-700' : ' group border-slate-300',
]);

const onClickButton = () => {
  props.isAdded ? cartStore.removeFromCart(props.good.id) : cartStore.storeToCart(props.good);
};
</script>

<template>
  <button @click="onClickButton" :class="buttonClasses">
    <CheckIcon v-if="isAdded" class="w-5 h-5 stroke-white" />
    <ShoppingBagIcon v-else class="w-5 h-5 stroke-slate-500 group-hover:stroke-green-600" />
  </button>
</template>
