<template>
  <div class="helper-layout">
    <Header>
      <template #title>{{ router.meta.title }}</template>
      <template #description>
        {{ router.meta.description }}
      </template>
    </Header>
    <main>
      <slot></slot>
    </main>
    <Footer />
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
</style>
