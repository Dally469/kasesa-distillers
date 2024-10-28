<script setup lang="ts">
const items = [
  'http://weisber.like-themes.com/wp-content/uploads/2018/02/02-1-275x275.jpg',
  'http://weisber.like-themes.com/wp-content/uploads/2018/02/03-1-275x275.jpg',
  'http://weisber.like-themes.com/wp-content/uploads/2018/02/07-1-275x275.jpg',
  'http://weisber.like-themes.com/wp-content/uploads/2018/02/blog_09-275x275.jpg',
  'http://weisber.like-themes.com/wp-content/uploads/2018/02/SLIDE_02-275x275.jpg',
  'http://weisber.like-themes.com/wp-content/uploads/2018/02/blog_06-275x275.jpg',
  'http://weisber.like-themes.com/wp-content/uploads/2018/02/blog_04-275x275.jpg',
  'http://weisber.like-themes.com/wp-content/uploads/2018/02/06-1-275x275.jpg',
  'http://weisber.like-themes.com/wp-content/uploads/2018/02/05-1-275x275.jpg'

]
</script>

<template>
  <div>
    <UCarousel v-slot="{ item }" :items="items" :ui="{ item: 'basis-full md:basis-1/2 lg:basis-1/3' }">
    <img :src="item" class="w-full" draggable="false">
  </UCarousel>
  </div>
</template>

