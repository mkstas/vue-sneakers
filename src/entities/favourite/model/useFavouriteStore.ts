import { Ref, ref } from 'vue';
import { defineStore } from 'pinia';
import { api } from '@/shared/api';
import { IProduct } from '@/shared/types';

export const useFavouriteStore = defineStore('Favourite', () => {
  const favourites: Ref<IProduct[]> = ref([]);

  const show = async () => {
    favourites.value = (await api.get('favourites')).data;
  };

  const store = async (product: IProduct) => {
    await api.post('favourites', product);
    favourites.value.push(product);
  };

  const remove = async (productId: number) => {
    await api.delete(`favourites/${productId}`);
    favourites.value = favourites.value.filter(product => product.id !== productId);
  };

  return { favourites, show, store, remove };
});
