<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="width"
    viewBox="0 0 14 20"
    fill="none"
  >
    <path :stroke="color" d="M0-.5h15.62" transform="matrix(.76822 .64018 .76822 -.64018 .768 0)" />
    <path
      :stroke="color"
      d="M0-.5h15.62"
      transform="matrix(.76822 -.64018 .76822 .64018 .768 20)"
    />
  </svg>
</template>

<script setup lang="ts">
import type { IProps } from "./iconsInterface";

const { width = "40", color = "currentColor" } = defineProps<IProps>();
</script>
