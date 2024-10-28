
<script setup lang="ts">
import { ref } from "vue"
import NavLinkVue from '@/components/layouts/others/NavLink.vue';
const productsItems = [
  {
    name: "Home",
    description: "ABV 6,5% | IBU 60 | OG 1.104",
    images: "http://weisber.like-themes.com/wp-content/uploads/2018/02/classic_08-360x1320.png"

  },
  {
    name: "Home",
    description: "ABV 6,5% | IBU 60 | OG 1.104",
    images: "http://weisber.like-themes.com/wp-content/uploads/2018/02/classic_08-360x1320.png"

  },
  {
    name: "Home",
    description: "ABV 6,5% | IBU 60 | OG 1.104",
    images: "http://weisber.like-themes.com/wp-content/uploads/2018/02/classic_08-360x1320.png"

  }
  , {
    name: "Home",
    description: "ABV 6,5% | IBU 60 | OG 1.104",
    images: "http://weisber.like-themes.com/wp-content/uploads/2018/02/classic_08-360x1320.png"

  }, {
    name: "Home",
    description: "ABV 6,5% | IBU 60 | OG 1.104",
    images: "http://weisber.like-themes.com/wp-content/uploads/2018/02/classic_08-360x1320.png"

  }, {
    name: "Home",
    description: "ABV 6,5% | IBU 60 | OG 1.104",
    images: "http://weisber.like-themes.com/wp-content/uploads/2018/02/classic_08-360x1320.png"

  }
];
</script>
<template>
  <div class="relative max-w-screen-2xl   px-4 sm:px-8 mx-auto grid grid-cols-12 gap-x-6 overflow-hidden">
    <div v-for="product in productsItems"
      class="col-span-2 lg:col-span-2 border space-y-2 cursor-pointer group hover:border-red-500 duration-300 rounded-xl flex items-center justify-center flex-col py-4 px-4 sm:px-6 my-8">
      <div class="w-[50px]">
        <img :src="product.images" class="w-full" draggable="false">
      </div>
      <h3 class="text-md py-1 font-semibold group-hover:text-red-700 duration-300">{{ product.name }}</h3>
      <p class="text-gray-400 text-xs ">{{ product.description }}</p>

    </div>

  </div>
</template>