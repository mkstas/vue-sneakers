import { Ref, ref } from 'vue';
import { defineStore } from 'pinia';
import { useLocalStorage } from '@/shared/utils';
import { IGood } from '../types/goods.types';

export const useCartStore = defineStore('cart', () => {
  const cart: Ref<IGood[]> = ref([]);

  const { getFromLocalStorage, saveToLocalStorage } = useLocalStorage();

  const getCart = () => {
    if (getFromLocalStorage('cart')) {
      return (cart.value = getFromLocalStorage('cart'));
    }
    saveToLocalStorage('cart', []);
  };

  const storeToCart = (good: IGood) => {
    cart.value.push(good);
    saveToLocalStorage('cart', cart.value);
  };

  const removeFromCart = (goodId: number) => {
    cart.value = cart.value.filter(good => good.id !== goodId);
    saveToLocalStorage('cart', cart.value);
  };

  return {
    cart,
    getCart,
    storeToCart,
    removeFromCart,
  };
});
