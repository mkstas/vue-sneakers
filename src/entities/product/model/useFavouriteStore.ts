import { Ref, ref } from 'vue';
import { defineStore } from 'pinia';
import { server } from '@/shared/server';
import { IProduct } from '../types/product.types';

export const useFavouriteStore = defineStore('Favourite', () => {
  const products: Ref<IProduct[]> = ref([]);

  const show = async () => {
    products.value = (await server.get('favourites')).data;
  };

  const store = async (product: IProduct) => {
    await server.post('favourites', product);
    products.value.push(product);
  };

  const remove = async (productId: number) => {
    await server.delete(`favourites/${productId}`);
    products.value = products.value.filter(product => product.id !== productId);
  };

  return { products, show, store, remove };
});
