import { Ref, ref } from 'vue';
import { defineStore } from 'pinia';
import { useLocalStorage } from '@/shared/utils';
import { IGood } from '../types/goods.types';

export const useFavouritesStore = defineStore('favourites', () => {
  const favourites: Ref<IGood[]> = ref([]);

  const { getFromLocalStorage, saveToLocalStorage } = useLocalStorage();

  const getFavourites = () => {
    if (getFromLocalStorage('favourites')) {
      return (favourites.value = getFromLocalStorage('favourites'));
    }
    saveToLocalStorage('favourites', []);
  };

  const storeFavourite = (good: IGood) => {
    favourites.value.push(good);
    saveToLocalStorage('favourites', favourites.value);
  };

  const removeFavorite = (goodId: number) => {
    favourites.value = favourites.value.filter(good => good.id !== goodId);
    saveToLocalStorage('favourites', favourites.value);
  };

  return {
    favourites,
    getFavourites,
    storeFavourite,
    removeFavorite,
  };
});
