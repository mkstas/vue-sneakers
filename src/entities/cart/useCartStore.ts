import { Ref, computed, ref } from 'vue';
import { defineStore } from 'pinia';
import { useLocalStorage } from '@/shared/utils';
import { IGood } from '@/shared/interfaces';

export const useCartStore = defineStore('cart', () => {
  const goods: Ref<IGood[]> = ref([]);
  const isLoading: Ref<boolean> = ref(true);

  const fullPrice = computed(() =>
    goods.value.reduce((price, good) => price + good.price, 0).toLocaleString('ru'),
  );

  const { getFromLocalStorage, saveToLocalStorage } = useLocalStorage();

  const getCart = () => {
    if (getFromLocalStorage('cart')) {
      goods.value = getFromLocalStorage('cart');
      return (isLoading.value = false);
    }
    saveToLocalStorage('cart', []);
    isLoading.value = false;
  };

  const storeToCart = (good: IGood) => {
    goods.value.push(good);
    saveToLocalStorage('cart', goods.value);
  };

  const removeFromCart = (goodId: number) => {
    goods.value = goods.value.filter(good => good.id !== goodId);
    saveToLocalStorage('cart', goods.value);
  };

  const clearCart = () => {
    goods.value = [];
    saveToLocalStorage('cart', goods.value);
  };

  return {
    goods,
    isLoading,
    fullPrice,
    getCart,
    storeToCart,
    removeFromCart,
    clearCart,
  };
});
