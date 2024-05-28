<script setup lang="ts">
import { CATALOG_PAGE_ROUTE } from '@/shared/config/constants';
</script>

<template>
  <RouterLink :to="CATALOG_PAGE_ROUTE" class="flex items-center gap-4">
    <img src="/icons/logo.png" alt="Логотип Vue Sneakers" width="48" height="48" />
    <div>
      <h2 class="text-xl font-bold uppercase">Vue Sneakers</h2>
      <p class="text-sm text-slate-500">Магазин лучших кроссовок</p>
    </div>
  </RouterLink>
</template>
