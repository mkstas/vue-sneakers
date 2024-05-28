<script setup lang="ts">
import { onMounted } from 'vue';
import { VContainer, VSheet } from '@/shared/ui';
import { useCartStore } from '@/entities/cart';
import { useFavouritesStore } from '@/entities/favourites';
import { useGoodsStore } from '@/entities/goods';
import { TheHeader } from '@/widgets/the-header';
import { TheMobileNav } from '@/widgets/the-mobile-nav';

const goodsStore = useGoodsStore();
const cartStore = useCartStore();
const favouritesStore = useFavouritesStore();

onMounted(async () => {
  await goodsStore.getAll();
  cartStore.getCart();
  favouritesStore.getFavourites();
});
</script>

<template>
  <TheHeader />
  <TheMobileNav class="sm:hidden" />
  <main class="pt-2 pb-16 sm:pt-16">
    <VContainer>
      <VSheet class="rounded-2xl">
        <RouterView />
      </VSheet>
    </VContainer>
  </main>
</template>
