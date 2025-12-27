<template>
  <div class="helper-layout">
    <ItemsHelpersHeader>
      <template #title>{{ router.meta.title }}</template>
      <template #description>
        {{ router.meta.description }}
      </template>
    </ItemsHelpersHeader>
    <main>
      <slot></slot>
    </main>
    <ItemsHelpersFooter />
  </div>
</template>

<script setup lang="ts">
const router = useRoute();
</script>

<style lang="scss">
.helper-layout {
  display: flex;
  flex-direction: column;
  min-height: 100lvh;
}

body {
  position: relative;
  background-color: var(--color-root);
  transition: background-color var(--transition-duration-long) ease-in-out;

  &:has(.overlay) {
    overflow: hidden;
  }

  & div#__nuxt,
  & div#__nuxt > div {
    min-height: 100lvh;
  }
}
</style>
