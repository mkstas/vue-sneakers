<script setup lang="ts">
import { IGood } from '@/shared/interfaces';
import { SERVER_API } from '@/shared/config/constants';
import { RemoveFromCart } from '@/features/remove-from-cart';

defineProps<{ good: IGood }>();
</script>

<template>
  <article class="flex items-center gap-4">
    <img
      :src="`${SERVER_API}/${good.image}`"
      :alt="good.title"
      height="70"
      width="80"
      class="w-20 h-16 object-contain"
    />
    <div class="flex-1 grid grid-cols-[auto_1fr_auto] items-center gap-4">
      <h3 class="font-medium">{{ good.title }}</h3>
      <div class="self-end mb-1 border-b border-dashed border-slate-200"></div>
      <div class="ml-auto flex flex-col items-end text-end">
        <span class="font-medium">{{ good.price.toLocaleString('ru') }} руб.</span>
        <RemoveFromCart :good-id="good.id" />
      </div>
    </div>
  </article>
</template>
