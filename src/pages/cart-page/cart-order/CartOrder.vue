<script setup lang="ts">
import { useOrderStore } from '@/entities/orders';

const orderStore = useOrderStore();
</script>

<template>
  <div class="flex items-center space-x-4">
    <img src="/icons/order-success.png" alt="Иконка заказ оформлен" class="w-20" />
    <div class="space-y-2">
      <h2 class="text-xl font-bold">Заказ оформлен</h2>
      <p class="text-lg font-medium">Номер заказа: {{ orderStore.order?.orderNumber }}</p>
    </div>
  </div>
</template>
