<script setup lang="ts">
import { RouterView } from 'vue-router';
import { VSheet } from '@/shared/ui';
import { TheHeader } from '@/widgets/the-header';
import { TheDrawer } from '@/widgets/the-drawer';
</script>

<template>
  <VSheet class="mx-auto my-10 w-full max-w-7xl rounded-xl divide-y divide-neutral-200">
    <TheHeader />
    <main class="p-2 sm:p-6 lg:p-10">
      <RouterView />
      <!-- <TheDrawer /> -->
    </main>
  </VSheet>
</template>
