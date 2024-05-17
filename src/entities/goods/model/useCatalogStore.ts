import { Ref, ref } from 'vue';
import { defineStore } from 'pinia';
import { $api } from '@/shared/config/server-api';
import { IGood } from '../types/goods.types';

export const useCatalogStore = defineStore('catalog', () => {
  const goods: Ref<IGood[]> = ref([]);
  const isLoading: Ref<boolean> = ref(true);
  const isError: Ref<boolean> = ref(false);

  const getAll = async () => {
    try {
      goods.value = (await $api.get('/goods')).data;
      isLoading.value = false;
    } catch (error) {
      isError.value = true;
    }
  };

  return {
    goods,
    isLoading,
    isError,
    getAll,
  };
});
