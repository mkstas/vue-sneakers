import { Ref, ref } from 'vue';
import { defineStore } from 'pinia';
import { $api } from '@/shared/config/server-api';
import { IGood } from '@/shared/interfaces';

export const useGoodsStore = defineStore('goods', () => {
  const goods: Ref<IGood[]> = ref([]);
  const isLoading: Ref<boolean> = ref(true);
  const isError: Ref<boolean> = ref(false);

  const getAll = async () => {
    try {
      goods.value = (await $api.get('/goods')).data;
    } catch (error) {
      isError.value = true;
    } finally {
      isLoading.value = false;
    }
  };

  const getBySearch = async (searchQuery: string) => {
    try {
      isLoading.value = true;
      goods.value = (await $api.get(`/goods?search=${searchQuery}`)).data;
    } catch (error) {
      isError.value = true;
    } finally {
      isLoading.value = false;
    }
  };

  return {
    goods,
    isLoading,
    isError,
    getAll,
    getBySearch,
  };
});
