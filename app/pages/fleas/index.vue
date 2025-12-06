<template>
  <FleasHeader />
  <FleasFileUpload />
</template>

<script setup lang="ts">
useHead({
  bodyAttrs: {
    class: "fleas-page",
  },
});
</script>

<style lang="scss">
body.fleas-page {
  background-color: var(--color-root);
  padding-block: 32px;

  &:has(.overlay) {
    overflow: hidden;
  }
}
</style>
