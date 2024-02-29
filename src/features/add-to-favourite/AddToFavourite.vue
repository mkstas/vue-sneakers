<script setup lang="ts">
import { HeartIcon } from '@heroicons/vue/24/outline';
import { IProps, useClasses } from './AddToFavourite.data';

const props = defineProps<IProps>();

const { buttonClasses, iconClasses } = useClasses(props.isFavourite);
</script>

<template>
  <button :class="buttonClasses">
    <HeartIcon :class="iconClasses" />
  </button>
</template>
