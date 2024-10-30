<template>
  <div class="container h-[400px] flex items-center justify-center flex-col bg-gray-400 py-9 text-center space-y-4">
    <h1 class="text-5xl font-bold">{{ props.item?.title }}</h1>
    <p class="text-xl font-light ">{{ props.item?.path }}</p>
  </div>
</template>

<script lang="ts" setup>
interface Item {
  title?: string;
  path?: string;
}

const props = defineProps<{ item?: Item }>();
</script>

<style>
/* Your styles here */
</style>
