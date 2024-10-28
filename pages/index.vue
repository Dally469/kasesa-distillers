<template>
  <NuxtLayout name="default">
    <div>
      <HomePage />
      <Promo />
      <BreweryPub />
      <DescoverBeers />
      <Articles/>
      <Gallery/>
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: false,
  title: " Home"
})
</script>

<style></style>