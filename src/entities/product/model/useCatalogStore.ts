import { Ref, ref } from 'vue';
import { defineStore } from 'pinia';
import { server } from '@/shared/server';
import { IProduct } from '../types/product.types';

export const useCatalogStore = defineStore('Catalog', () => {
  const products: Ref<IProduct[]> = ref([]);

  const show = async () => {
    products.value = (await server.get('products')).data;
  };

  const searchByTitle = async (value: string) => {
    products.value = (await server.get(`products?title_like=${value}`)).data;
  };

  return { products, show, searchByTitle };
});
