<template>
  <div class="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">

<div class=" mb-9 text-center">
<h1 class="text-5xl">Recent articles</h1>
</div>


<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

    <div v-for="(item,index) in articles" :key="item.id">
      <div v-if="index < 3">
        <div class="rounded overflow-hidden shadow-lg flex flex-col">
        <a href="#"></a>
        <div class="relative"><a href="#">
                <img class="w-full"
                    :src="item.image"
                    alt="Sunset in the mountains">
                <div
                    class="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                </div>
            </a>
        </div>
        <div class="px-6 text-center py-4 mb-auto">
            <a href="#"
                class="font-medium text-lg hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">{{ item.title }}</a>
            <p class="text-gray-500 text-sm">
               {{ item.description }}
            </p>
        </div>
        <div class="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
            <span href="#" class="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
                <svg height="13px" width="13px" version="1.1" id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                    y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;"
                    xml:space="preserve">
                    <g>
                        <g>
                            <path
                                d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256 c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128 c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z">
                            </path>
                        </g>
                    </g>
                </svg>
                <span class="ml-1">{{ item.date }}</span>
            </span>

            <span href="#" class="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
                <svg class="h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z">
                    </path>
                </svg>
                <span class="ml-1">39 Comments</span>
            </span>
        </div>
    </div>
      </div>
    </div>

</div>
<div class="flex justify-center py-5">
        <button class="bg-red-500 py-3 px-9 font-semibold rounded-full hover:bg-gray-300 hover:text-black duration-300">Read More</button>
      </div>

      
</div>
</template>

<script lang="ts" setup>

const articles = [
  {
    id:1,
    image:"http://weisber.like-themes.com/wp-content/uploads/2018/02/blog_promo_01-1120x720.jpg",
    title:"Promo",
    description:"Experts predict the growing popularity of beer",
    date:"April 12,2023",
    comment:""
  },
  {
    image:"http://weisber.like-themes.com/wp-content/uploads/2018/02/blog_promo_02-1120x720.jpg",
    title:"Promo",
    description:"British airports increased profits 4 times in 2018",
    date:"May 22,2022",
    comment:""
  },
  {
    image:"http://weisber.like-themes.com/wp-content/uploads/2018/02/blog_promo_03-1120x720.jpg",
    title:"Promo",
    description:"The popularity of craft beer rises every year",
    date:"August 18,2023",
    comment:""
  },
  {
    image:"http://weisber.like-themes.com/wp-content/uploads/2018/02/blog_promo_03-1120x720.jpg",
    title:"Promo",
    description:"The popularity of craft beer rises every year",
    date:"August 18,2023",
    comment:""
  },
] 
</script>

<style>

</style>