import { useCartStore } from '@/entities/product';
import { computed } from 'vue';

export const useDrawer = () => {
  const cartStore = useCartStore();

  const fullPrice = computed(() =>
    cartStore.products.reduce((price, currentProduct) => price + currentProduct.price, 0),
  );

  return { cartStore, fullPrice };
};
