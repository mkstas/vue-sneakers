<script setup lang="ts">
import { RouterView } from 'vue-router';
import { VSheet } from '@/shared/ui';
import { useOpenDrawer } from '@/shared/api';
import { TheHeader } from '@/widgets/the-header';
import { TheDrawer } from '@/widgets/the-drawer';

const { isOpenDrawer, openDrawer, closeDrawer } = useOpenDrawer();
</script>

<template>
  <VSheet class="mx-auto my-10 w-full max-w-7xl rounded-xl divide-y divide-neutral-200">
    <TheHeader @open-drawer="openDrawer" />
    <main class="p-2 sm:p-6 lg:p-10">
      <RouterView />
      <TheDrawer v-if="isOpenDrawer" @close-drawer="closeDrawer" />
    </main>
  </VSheet>
</template>
