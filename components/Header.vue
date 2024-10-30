<template>
  <div class="container h-[400px] flex items-center justify-center flex-col bg-gray-500 py-9 text-center space-y-4">
    <h1 class="text-5xl font-bold">{{ props.item?.title }}</h1>
    <p class="text-red-400 text-xl ">{{ props.item?.path }}</p>
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
