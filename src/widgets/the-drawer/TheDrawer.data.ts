import { Ref, ref } from 'vue';
import { useCartStore } from '@/entities/product';

export const useDrawer = () => {
  const isLoading: Ref<boolean> = ref(false);

  const cartStore = useCartStore();

  const fetchData = async () => {
    if (cartStore.products.length <= 0) {
      try {
        isLoading.value = true;
        await cartStore.show();
      } catch (error) {
        console.log(error);
      } finally {
        isLoading.value = false;
      }
    }
  };

  return { isLoading, cartStore, fetchData };
};
