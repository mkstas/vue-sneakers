import { Ref, ref } from 'vue';
import { defineStore } from 'pinia';
import { useLocalStorage } from '@/shared/utils';
import { IGood } from '@/shared/interfaces';

export const useFavouritesStore = defineStore('favourites', () => {
  const goods: Ref<IGood[]> = ref([]);
  const isLoading: Ref<boolean> = ref(true);

  const { getFromLocalStorage, saveToLocalStorage } = useLocalStorage();

  const getFavourites = () => {
    if (getFromLocalStorage('favourites')) {
      goods.value = getFromLocalStorage('favourites');
      return (isLoading.value = false);
    }
    saveToLocalStorage('favourites', []);
    isLoading.value = false;
  };

  const storeFavourite = (good: IGood) => {
    goods.value.push(good);
    saveToLocalStorage('favourites', goods.value);
  };

  const removeFavorite = (goodId: number) => {
    goods.value = goods.value.filter(good => good.id !== goodId);
    saveToLocalStorage('favourites', goods.value);
  };

  return {
    goods,
    isLoading,
    getFavourites,
    storeFavourite,
    removeFavorite,
  };
});
