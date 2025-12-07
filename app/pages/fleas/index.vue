<template>
  <FleasHeader />
  <FleasFileUpload />
  <FleasChecklist />
  <FleasFooter />
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
  position: relative;
  background-color: var(--color-root);
  padding-top: 32px;

  &:has(.overlay) {
    overflow: hidden;
  }

  & div#__nuxt,
  & div#__nuxt > div {
    display: grid;
    grid-template-rows: auto auto auto 1fr;
    min-height: 100lvh;
  }
}
</style>
