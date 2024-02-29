import { createRouter, createWebHistory } from 'vue-router';

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'Catalog',
      path: '/',
      component: () => import('@/pages/catalog-page'),
    },
    {
      name: 'Favourite',
      path: '/favorite',
      component: () => import('@/pages/favourite-page'),
    },
  ],
});
