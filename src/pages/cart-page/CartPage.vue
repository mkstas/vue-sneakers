<script setup lang="ts">
import { ArrowLeftIcon } from '@heroicons/vue/24/outline';
import { CATALOG_PAGE_ROUTE } from '@/shared/config/constants';
import { useCartStore } from '@/entities/cart';
import { useOrderStore } from '@/entities/orders';
import { CreateOrderForm } from '@/features/create-order-form';
import { CartGood } from '@/widgets/cart-good';
import { CartGoodSkeleton } from '@/widgets/cart-good-skeleton';
import { CartPageEmpty } from './cart-empty';
import { CartOrder } from './cart-order';

const cartStore = useCartStore();
const orderStore = useOrderStore();
</script>

<template>
  <section class="space-y-8">
    <header class="flex items-center gap-2 -ml-2">
      <RouterLink :to="CATALOG_PAGE_ROUTE" class="group p-2">
        <ArrowLeftIcon class="w-6 h-6 group-hover:-translate-x-2 transition-transform" />
      </RouterLink>
      <h1 class="text-2xl font-bold">Корзина</h1>
    </header>
    <CartOrder v-if="orderStore.order" />
    <template v-else>
      <div v-if="cartStore.isLoading" class="space-y-4">
        <CartGoodSkeleton v-for="(_, key) in 3" :key="key" />
      </div>
      <template v-else>
        <template v-if="cartStore.goods.length > 0">
          <div class="space-y-4">
            <CartGood v-for="good in cartStore.goods" :key="good.id" :good="good" />
          </div>
          <CreateOrderForm />
        </template>
        <CartPageEmpty v-else />
      </template>
    </template>
  </section>
</template>
