import { Ref, ref } from 'vue';
import { useProductStore } from '@/entities/product';
import { useFavouriteStore } from '@/entities/favourite';
import { useCartStore } from '@/entities/cart';

export const useCatalog = () => {
  const isLoading: Ref<boolean> = ref(false);

  const productStore = useProductStore();
  const favouriteStore = useFavouriteStore();
  const cartStore = useCartStore();

  const fetchProducts = async () => {
    if (productStore.products.length <= 0) {
      try {
        isLoading.value = true;
        await productStore.show();
        await favouriteStore.show();
        await cartStore.show();
      } catch (error) {
        console.error(error);
      } finally {
        isLoading.value = false;
      }
    }
  };

  return { isLoading, productStore, favouriteStore, fetchProducts };
};
