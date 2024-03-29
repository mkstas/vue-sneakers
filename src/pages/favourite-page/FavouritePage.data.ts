import { Ref, ref } from 'vue';
import { useCartStore, useFavouriteStore } from '@/entities/product';

export const useFavouritePage = () => {
  const isLoading: Ref<boolean> = ref(false);

  const favouriteStore = useFavouriteStore();
  const cartStore = useCartStore();

  const fetchData = async () => {
    if (favouriteStore.products.length <= 0) {
      try {
        isLoading.value = true;
        await favouriteStore.show();
        await cartStore.show();
      } catch (error) {
        console.error(error);
      } finally {
        isLoading.value = false;
      }
    }
  };

  return { isLoading, favouriteStore, fetchData };
};
