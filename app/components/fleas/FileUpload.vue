<template>
  <Teleport to="body">
    <div class="overlay" v-if="!isFileUploaded && isOverDropZone">
      <IconsUploadSVG class="label-icon label-icon--uploading" width="150" />
    </div>
  </Teleport>
  <section class="file-container container">
    <FleasFileInfo v-if="isFileUploaded || errorMessage" @clear-errors="clearErrors">{{
      errorMessage
    }}</FleasFileInfo>
    <div class="file-upload" v-else>
      <label for="file-upload" class="label">
        <IconsUploadSVG class="label-icon" />
        <h2 class="label-title">Upload Save File</h2>
        <span class="description">Drag and drop or chose your save file</span>
        <input type="file" id="file-upload" class="visually-hidden" @change="onChange" />
      </label>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useDropZone } from "@vueuse/core";

const { file } = await useFileContext();

const isFileUploaded = computed(() => !!file.value);
const errorMessage = ref<string | null>();

const { isOverDropZone } = useDropZone(document, { onDrop: fileHandle });

function clearErrors() {
  errorMessage.value = null;
}

function onChange(event: Event) {
  const target = event.target as HTMLInputElement;

  const files = target.files;
  if (!files) return;

  const filesArray = Array.from(files);
  fileHandle(filesArray);
}

async function fileHandle(files: File[] | null) {
  if (!files || files.length < 1) return;

  const uploadedFile = files[0]!;
  try {
    errorMessage.value = null;

    file.value = (await useFileContext(uploadedFile)).file.value;
  } catch (error) {
    console.error(error);
    errorMessage.value = `Error: File is corrupted or you uploaded not a *.dat file`;
  }
}
</script>

<style scoped lang="scss">
@use "@/styles/mixins.scss" as *;

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
}

.file-container {
  margin-top: 30px;
}

.file-upload {
  @include plate-style;
  max-height: 300px;
  height: 100%;
  border-style: dashed;
  transition-property: border-color, transform;
  transition-duration: var(--transition-duration);
  -webkit-tap-highlight-color: transparent;

  @include only-desktop-hover {
    border-color: var(--color-accent);
    transform: scale(1.01);
  }

  &:active {
    background-color: var(--color-hover-bg);
  }
}

.label {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-block: 60px;

  &-icon {
    color: var(--color-accent);
    margin-bottom: 15px;

    &--uploading {
      animation: 0.7s ease-out infinite both jumping;
    }
  }

  &-title {
    font-family: var(--font-primary);
    font-weight: 300;
    color: var(--color-text-primary);
  }

  & .description {
    font-family: var(--font-primary);
    font-weight: 300;
    color: var(--color-muted);
  }
}

@keyframes jumping {
  25% {
    transform: translateY(4%);
  }
  75% {
    transform: translateY(-4%);
  }
  100% {
    transform: translateY(0%);
  }
}
</style>
