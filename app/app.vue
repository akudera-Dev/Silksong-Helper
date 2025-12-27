<template>
  <Analytics />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { Analytics } from "@vercel/analytics/nuxt";
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all var(--transition-duration-long);
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
