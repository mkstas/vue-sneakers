import { useCartStore } from '@/entities/product';
import { computed } from 'vue';

export const useHeader = () => {
  const cartStore = useCartStore();

  const fullPrice = computed(() =>
    cartStore.products.reduce((price, currentProduct) => price + currentProduct.price, 0),
  );

  return { fullPrice };
};
