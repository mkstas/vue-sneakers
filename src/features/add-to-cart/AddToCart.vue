<script setup lang="ts">
import { CheckIcon, PlusIcon } from '@heroicons/vue/24/outline';
import { IProps, useClasses } from './AddToCart.data';

const props = defineProps<IProps>();

const { buttonClasses } = useClasses(props.isAdded);
</script>

<template>
  <button :class="buttonClasses">
    <CheckIcon v-if="isAdded" class="w-5 h-5 text-white" />
    <PlusIcon v-else class="w-5 h-5 text-neutral-400 group-hover:text-green-600" />
  </button>
</template>
