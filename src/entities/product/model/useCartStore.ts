import { Ref, ref } from 'vue';
import { defineStore } from 'pinia';
import { server } from '@/shared/server';
import { IProduct } from '../types/product.types';

export const useCartStore = defineStore('Cart', () => {
  const products: Ref<IProduct[]> = ref([]);

  const show = async () => {
    products.value = (await server.get('cart')).data;
  };

  const store = async (product: IProduct) => {
    await server.post('cart', product);
    products.value.push(product);
  };

  const remove = async (productId: number) => {
    await server.delete(`cart/${productId}`);
    products.value = products.value.filter(product => product.id !== productId);
  };

  const order = async () => {
    await server.post('/orders', products.value);
    products.value = [];
  };

  return { products, show, store, remove, order };
});
