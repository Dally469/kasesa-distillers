<template>
  <div class="bg-green-900">
    <section class="py-10 sm:py-16 lg:py-24">
      <div class="max-w-7xl px-4 mx-auto sm:px-6 lg:px-8">
        <div class="grid justify-between items-center grid-cols-1 gap-y-6 md:grid-cols-3 md:gap-x-20">
          <div class="">
            <div v-for="item in items" :key="item.id" class="py-5">
              <h2 class="text-3xl font-bold leading-tight text-red-500 sm:text-4xl lg:text-5xl">
              <span class=" text-2xl">{{ item.title }}</span>
            </h2>
            <p class="mt-4 text-base text-start leading-relaxed text-gray-100">
             {{ item.description }}
            </p>
            </div>
            

    
          </div>

          <div class="relative pl-20 pr-6 sm:pl-6 md:px-0">
            <div class="relative w-full max-w-xs mt-4 mb-10 ml-auto">
              <img class="ml-auto" src="http://weisber.like-themes.com/wp-content/uploads/2019/04/beer-clock.png" alt="" />
            </div>
          </div>
          <div>
            <div v-for="item in itimesx" :key="item.id" class="py-5">
              <h2 class="text-3xl font-bold leading-tight text-end text-red-500 sm:text-4xl lg:text-5xl">
              <span class=" text-2xl">{{ item.title }}</span>
            </h2>
            <p class="mt-4 text-base text-end leading-relaxed text-gray-100">
              {{ item.description }}
            </p>
            </div>
          
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>



const items = [
  {
    id:1,
    title:"Selected Malts",
    description:"Nulla imperdiet ultrices quam, et semper nibh fringilla porttitor nisl."
  },
  {
    id:2,
    title:"Quality Hops",
    description:"Nulla imperdiet ultrices quam, et semper nibh fringilla porttitor nisl."
  },
  {
    id:3,
    title:"Special Water",
    description:"Nulla imperdiet ultrices quam, et semper nibh fringilla porttitor nisl."
  }, 
  
]

const itimesx = [
{
    id:1,
    title:"Unique Yeast",
    description:"Nulla imperdiet ultrices quam, et semper nibh fringilla porttitor nisl."
  },
  {
    id:2,
    title:"Perennial Recipes",
    description:"Nulla imperdiet ultrices quam, et semper nibh fringilla porttitor nisl."
  },
  {
    id:3,
    title:"Modern Equipment",
    description:"Nulla imperdiet ultrices quam, et semper nibh fringilla porttitor nisl."
  }, 
]
</script>

<style></style>