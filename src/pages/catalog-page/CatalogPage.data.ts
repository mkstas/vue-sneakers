import { Ref, ref } from 'vue';
import { useCartStore, useCatalogStore, useFavouriteStore } from '@/entities/product';

export const useCatalog = () => {
  const isLoading: Ref<boolean> = ref(false);

  const catalogStore = useCatalogStore();
  const favouriteStore = useFavouriteStore();
  const cartStore = useCartStore();

  const fetchData = async () => {
    if (catalogStore.products.length <= 0) {
      try {
        isLoading.value = true;
        await catalogStore.show();
        await favouriteStore.show();
        await cartStore.show();
      } catch (error) {
        console.error(error);
      } finally {
        isLoading.value = false;
      }
    }
  };

  return { isLoading, catalogStore, fetchData };
};
