import { Ref, ref } from 'vue';
import { defineStore } from 'pinia';
import { api } from '@/shared/api';
import { IProduct } from '@/shared/types';

export const useCartStore = defineStore('Cart', () => {
  const cart: Ref<IProduct[]> = ref([]);

  const show = async () => {
    cart.value = (await api.get('cart')).data;
  };

  const store = async (product: IProduct) => {
    await api.post('cart', product);
    cart.value.push(product);
  };

  const remove = async (productId: number) => {
    await api.delete(`cart/${productId}`);
    cart.value = cart.value.filter(product => product.id !== productId);
  };

  return { cart, show, store, remove };
});
