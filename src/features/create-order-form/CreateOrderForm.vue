<script setup lang="ts">
import { Ref, ref } from 'vue';
import { useCartStore } from '@/entities/cart';
import { useOrderStore } from '@/entities/orders';

const phoneNumber: Ref<string> = ref('');

const cartStore = useCartStore();
const orderStore = useOrderStore();

const onSubmitForm = async () => {
  await orderStore.createOrder(cartStore.goods, phoneNumber.value);
};
</script>

<template>
  <div class="space-y-4">
    <h2 class="flex gap-4 text-xl font-bold">
      <span>Итого</span>
      <span class="flex-1 mb-2 border-b border-dashed border-slate"></span>
      <span class="text-xl">{{ cartStore.fullPrice }} руб.</span>
    </h2>
    <form @submit.prevent="onSubmitForm" method="post" class="space-y-4">
      <div>
        <label for="phone_number" class="block font-medium pb-1">Номер телефона</label>
        <input
          v-model="phoneNumber"
          id="phone_number"
          name="phone_number"
          type="text"
          placeholder="+7 900 000 00 00"
          class="w-full bg-slate-100 py-2 px-4 rounded-2xl"
        />
        <span></span>
      </div>
      <button class="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-2xl text-white">
        Оформить заказ
      </button>
    </form>
  </div>
</template>
