import { createRouter, createWebHistory } from 'vue-router';
import { CatalogPage } from '@/pages/catalog-page';
import { FavouritesPage } from '@/pages/favourites-page';

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'catalog',
      path: '/',
      component: CatalogPage,
    },
    {
      name: 'favourite',
      path: '/favorite',
      component: FavouritesPage,
    },
  ],
});
