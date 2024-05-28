import { createRouter, createWebHistory } from 'vue-router';
import {
  CART_PAGE_ROUTE,
  CATALOG_PAGE_ROUTE,
  FAVOURITES_PAGE_ROUTE,
  NOT_FOUND_PAGE_ROUTE,
} from '@/shared/config/constants';
import { CatalogPage } from '@/pages/catalog-page';
import { CartPage } from '@/pages/cart-page';
import { FavouritesPage } from '@/pages/favourites-page';
import { NotFoundPage } from '@/pages/not-found-page';

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'catalog',
      path: CATALOG_PAGE_ROUTE,
      component: CatalogPage,
    },
    {
      name: 'cart',
      path: CART_PAGE_ROUTE,
      component: CartPage,
    },
    {
      name: 'favourite',
      path: FAVOURITES_PAGE_ROUTE,
      component: FavouritesPage,
    },
    {
      name: 'not-found',
      path: NOT_FOUND_PAGE_ROUTE,
      component: NotFoundPage,
    },
  ],
});
