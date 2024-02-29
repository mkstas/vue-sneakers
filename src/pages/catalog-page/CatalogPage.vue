<script setup lang="ts">
import { ProductCard } from '@/widgets/product-card';
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline';
</script>

<template>
  <section class="space-y-4 md:space-y-6 lg:space-y-10">
    <header class="max-sm:mt-3 flex flex-wrap justify-between gap-4 items-center">
      <h1 class="text-2xl md:text-3xl font-bold">Все кроссовки</h1>
      <div class="relative w-full max-w-80 flex items-center border border-neutral-200 rounded-xl">
        <MagnifyingGlassIcon class="w-5 h-5 absolute left-3 text-neutral-400" />
        <input type="text" placeholder="Найти..." class="pl-10 pr-4 py-2 w-full rounded-xl" />
      </div>
    </header>
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-6 lg:gap-10">
      <ProductCard :is-favourite="true" :is-added="true" />
      <ProductCard :is-favourite="true" :is-added="false" />
      <ProductCard :is-favourite="false" :is-added="true" />
      <ProductCard :is-favourite="false" :is-added="false" />
    </div>
  </section>
</template>
