<script setup lang="ts">
import { Ref, ref, watch } from 'vue';
import debounce from 'lodash.debounce';
import { useGoodsStore } from '@/entities/goods';

const searchQuery: Ref<string> = ref('');

const goodsStore = useGoodsStore();

watch(
  searchQuery,
  debounce(async () => await goodsStore.getBySearch(searchQuery.value), 400),
);
</script>

<template>
  <input
    v-model="searchQuery"
    name="search"
    type="text"
    placeholder="Найти..."
    class="w-full bg-slate-100 py-2 px-4 rounded-2xl"
  />
</template>
