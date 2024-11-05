<script setup lang="ts">
const items = [
  {
    src: 'http://weisber.like-themes.com/wp-content/uploads/2018/02/classic_08-360x1320.png',
    title: 'Irish Stout',
    description: 'ABV 6,5% | IBU 60 | OG 1.104'
  },
  {
    src: 'http://weisber.like-themes.com/wp-content/uploads/2018/02/classic_03-360x1320.png',
    title: 'Golden Beer',
    description: 'ABV 5,5% | IBU 70 | OG 1.104'
  },
  {
    src: 'http://weisber.like-themes.com/wp-content/uploads/2018/02/classic_04-360x1320.png',
    title: 'England Knights',
    description: 'ABV 6,5% | IBU 60 | OG 1.104'
  },
  {
    src: 'http://weisber.like-themes.com/wp-content/uploads/2018/02/classic_05-360x1320.png',
    title: 'Good Old Days',
    description: 'ABV 8,5% | IBU 60 | OG 1.104'
  },
  {
    src: 'http://weisber.like-themes.com/wp-content/uploads/2018/02/classic_01-360x1320.png',
    title: 'Weis Beers',
    description: 'ABV 6,0% | IBU 90 | OG 1.104'
  },
  {
    src: 'http://weisber.like-themes.com/wp-content/uploads/2018/02/bottle_02-360x1277.png',
    title: 'Golden Beer',
    description: 'ABV 6,8% | IBU 50 | OG 1.104'
  }
]
</script>

<template>
  <div class="bg-gray-100 text-black">
    <div class="max-w-7xl px-4 mx-auto sm:px-6 lg:px-8">
      <div class="text-center py-7 lg:py-24 px-5">
        <h1 class="text-5xl pb-5 text-red-700 font-bold">Discover our beer</h1>
        <p class="text-xl">Join us in raising a glass to unforgettable moments and unforgettable flavors. Cheers to
          excellence, from our distillery to your glass.
        </p>
      </div>
      <UCarousel v-slot="{ item }" :items="items" :ui="{ item: 'basis-full md:basis-1/2 lg:basis-1/4' }" :prev-button="{
        color: 'gray',
        icon: 'i-heroicons-arrow-left-20-solid',
        class: 'absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-md hover:bg-gray-200'
      }" :next-button="{
    color: 'gray',
    icon: 'i-heroicons-arrow-right-20-solid',
    class: 'absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-md hover:bg-gray-200'
  }" arrows>
        <div class="flex flex-col items-center justify-center text-center p-4">
          <div class="w-[100px] mx-auto">
            <img :src="item.src" class="w-full" draggable="false">
          </div>
          <h3 class="mt-2 text-2xl py-3 font-semibold">{{ item.title }}</h3>
          <p class="text-gray-600">{{ item.description }}</p>
        </div>
      </UCarousel>

      <div class="flex justify-center py-5">
        <button class="bg-red-500 py-3 px-9 font-semibold rounded-full hover:bg-gray-300 duration-300">Read
          More</button>
      </div>
    </div>
  </div>
</template>
