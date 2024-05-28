import { Ref, ref } from 'vue';
import { defineStore } from 'pinia';
import { $api } from '@/shared/config/server-api';
import { IGood, IOrder } from '@/shared/interfaces';
import { useCartStore } from '../cart';

export const useOrderStore = defineStore('orders', () => {
  const order: Ref<IOrder | undefined> = ref();
  const isLoading: Ref<boolean> = ref(false);
  const isError: Ref<boolean> = ref(false);

  const cartStore = useCartStore();

  const createOrder = async (goods: IGood[], phoneNumber: string) => {
    try {
      isLoading.value = true;
      const { data } = await $api.post<IOrder>('/orders', {
        phoneNumber,
        goods,
      });
      order.value = data;
      cartStore.clearCart();
    } catch (error) {
      isError.value = true;
    } finally {
      isLoading.value = false;
    }
  };

  return {
    order,
    isLoading,
    isError,
    createOrder,
  };
});
