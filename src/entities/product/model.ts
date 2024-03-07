import { Ref, ref } from 'vue';
import { defineStore } from 'pinia';
import { api } from '@/shared/api';
import { IProduct } from '@/shared/types';

export const useProductStore = defineStore('Product', () => {
  const products: Ref<IProduct[]> = ref([]);

  const show = async () => {
    products.value = (await api.get('products')).data;
  };

  const searchByName = async (value: string) => {
    products.value = (await api.get(`products?title_like=${value}`)).data;
  };

  return { products, show, searchByName };
});
