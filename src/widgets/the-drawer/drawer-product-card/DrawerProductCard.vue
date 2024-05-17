<script setup lang="ts">
import { SERVER_API } from '@/shared/config/constants';
import { IGood } from '@/entities/goods';
import { RemoveFromCart } from '@/features/remove-from-cart';

defineProps<{ good: IGood }>();
</script>

<template>
  <article
    class="p-5 flex items-center gap-5 border border-neutral-200 rounded-2xl overflow-hidden"
  >
    <img :src="`${SERVER_API}/${good.image}`" :alt="good.title" width="64" height="64" />
    <div class="space-y-1 flex-1">
      <h3 class="text-sm text-balance">{{ good.title }}</h3>
      <p class="font-bold">{{ good.price.toLocaleString('ru') }} руб.</p>
    </div>
    <RemoveFromCart :good-id="good.id" />
  </article>
</template>
