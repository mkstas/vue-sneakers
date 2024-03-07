import { IProduct } from '@/shared/types';
import { useFavouriteStore } from '@/entities/favourite';

export interface IProps {
  product: IProduct;
  isFavourite: boolean;
}

export const useAddToFavourite = () => {
  const favouriteStore = useFavouriteStore();

  const storeFavourite = async (product: IProduct) => {
    await favouriteStore.store(product);
  };

  const removeFavorite = async (productId: number) => {
    await favouriteStore.remove(productId);
  };

  return { storeFavourite, removeFavorite };
};
