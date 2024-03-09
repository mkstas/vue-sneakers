import { Ref, ref } from 'vue';
import { defineStore } from 'pinia';
import { server } from '@/shared/server';
import { IProduct } from '../types/product.types';

export const useCartStore = defineStore('Cart', () => {
  const products: Ref<IProduct[]> = ref([]);
  const isLoadingOrder: Ref<boolean> = ref(false);
  const isOrdered: Ref<boolean> = ref(false);

  const show = async () => {
    products.value = (await server.get('cart')).data;
  };

  const store = async (product: IProduct) => {
    await server.post('cart', product);
    isOrdered.value = false;
    products.value.push(product);
  };

  const remove = async (productId: number) => {
    await server.delete(`cart/${productId}`);
    products.value = products.value.filter(product => product.id !== productId);
  };

  const order = async () => {
    try {
      isLoadingOrder.value = true;

      await server.post('/orders', { id: Date.now(), products: products.value });

      products.value.forEach(async (product: IProduct) => {
        await remove(product.id);
      });

      isOrdered.value = true;
    } catch (error) {
      console.log(error);
    } finally {
      isLoadingOrder.value = false;
    }
  };

  return { products, isLoadingOrder, isOrdered, show, store, remove, order };
});
