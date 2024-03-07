import { Ref, ref } from 'vue';
import { useFavouriteStore } from '@/entities/favourite';
import { useCartStore } from '@/entities/cart';

export const useFavouritePage = () => {
  const isLoading: Ref<boolean> = ref(false);

  const favouriteStore = useFavouriteStore();
  const cartStore = useCartStore();

  const fetchFavourites = async () => {
    if (favouriteStore.favourites.length <= 0) {
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

  return { isLoading, favouriteStore, fetchFavourites };
};
