<script setup lang="ts">
import { IProduct } from '@/entities/product';
import { RemoveFromCart } from '@/features/remove-from-cart';

defineProps<{ product: IProduct }>();
</script>

<template>
  <article
    class="p-5 flex items-center gap-5 border border-neutral-200 rounded-2xl overflow-hidden"
  >
    <img :src="product.imageUrl" :alt="product.title" width="64" height="64" />
    <div class="space-y-1 flex-1">
      <h3 class="text-sm text-balance">{{ product.title }}</h3>
      <p class="font-bold">{{ product.price.toLocaleString('ru') }} руб.</p>
    </div>
    <RemoveFromCart :product-id="product.id" />
  </article>
</template>
