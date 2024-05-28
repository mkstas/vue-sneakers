<script setup lang="ts">
import { VContainer, VSheet } from '@/shared/ui';
import { HeaderLogo } from './header-logo';
import { HeaderNav } from './header-nav';
</script>

<template>
  <header class="sticky top-0 z-50">
    <VContainer>
      <VSheet class="flex items-center justify-between rounded-b-2xl">
        <HeaderLogo />
        <HeaderNav />
      </VSheet>
    </VContainer>
  </header>
</template>
