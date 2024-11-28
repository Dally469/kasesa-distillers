<template>
  <NuxtLayout name="default">
    <div>
      <HomePage />
      <Promo />
      <!-- <BreweryPub /> -->
      <div class="relative flex bg-[#F40035] text-white overflow-x-hidden">
        <div class="py-12 animate-marquee flex whitespace-nowrap">
          <span class="text-2xl mx-4 flex gap-x-6 uppercase font-semibold">start saving 10% on every order
            <span
              class="bg-white p-1 rounded-full h-8 w-8 text-[#F40035] text-2xl flex items-center justify-center">%</span>
          </span>
          <span class="text-2xl mx-4 flex gap-x-6 uppercase font-semibold"> art saving 10% on every order
            <span
              class="bg-white p-1 rounded-full h-8 w-8 text-[#F40035] text-2xl flex items-center justify-center">%</span>
          </span>
          <span class="text-2xl mx-4 flex gap-x-6 uppercase font-semibold">start saving 10% on every order
            <span
              class="bg-white p-1 rounded-full h-8 w-8 text-[#F40035] text-2xl flex items-center justify-center">%</span>
          </span>
          <span class="text-2xl mx-4 flex gap-x-6 uppercase font-semibold">start saving 10% on every order
            <span
              class="bg-white p-1 rounded-full h-8 w-8 text-[#F40035] text-2xl flex items-center justify-center">%</span>
          </span>
          <span class="text-2xl mx-4 flex gap-x-6 uppercase font-semibold">start saving 10% on every order
            <span
              class="bg-white p-1 rounded-full h-8 w-8 text-[#F40035] text-2xl flex items-center justify-center">%</span>
          </span>

        </div>

        <div class="absolute top-0 flex py-12 animate-marquee2 whitespace-nowrap">
          <div class="text-2xl mx-4 flex gap-x-6 uppercase font-semibold">start saving 10% on every order
            <span
              class="bg-white p-1 rounded-full h-8 w-8 text-[#F40035] text-2xl flex items-center justify-center">%</span>
          </div>
          <div class="text-2xl mx-4 flex gap-x-6 uppercase font-semibold">start saving 10% on every order
            <span
              class="bg-white p-1 rounded-full h-8 w-8 text-[#F40035] text-2xl flex items-center justify-center">%</span>
          </div>
          <div class="text-2xl mx-4 flex gap-x-6 uppercase font-semibold">start saving 10% on every order
            <span
              class="bg-white p-1 rounded-full h-8 w-8 text-[#F40035] text-2xl flex items-center justify-center">%</span>
          </div>
          <div class="text-2xl mx-4 flex gap-x-6 uppercase font-semibold">start saving 10% on every order
            <span
              class="bg-white p-1 rounded-full h-8 w-8 text-[#F40035] text-2xl flex items-center justify-center">%</span>
          </div>
          <div class="text-2xl mx-4 flex gap-x-6 uppercase font-semibold">start saving 10% on every order
            <span
              class="bg-white p-1 rounded-full h-8 w-8 text-[#F40035] text-2xl flex items-center justify-center">%</span>
          </div>
        </div>
      </div>
      <DescoverBeers />
      <Articles />
      <Gallery />
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