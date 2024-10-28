<template>
  <a class="py-1 text-muted  hover:text-red-500" :href="url"> {{ name }} </a>
</template>
<script setup lang="ts">

const props = defineProps({
  name: String,
  url: String,
});

</script>