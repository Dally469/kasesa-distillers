<template>
  <div>
    <div class="flex flex-col lg:flex-row justify-around items-center py-7">
      <div class="flex items-center gap-5">
        <UIcon name="i-heroicons-academic-cap" />
        <UIcon name="i-heroicons-academic-cap" />
        <UIcon name="i-heroicons-academic-cap" />
        <UIcon name="i-heroicons-academic-cap" />
      </div>
      <div class="w-[100px]">
        <img src="../assets/kasesa.jpg" alt="logo" class="w-full rounded-3xl">
      </div>
      <div class="flex items-center gap-5">
        <UIcon name="i-heroicons-academic-cap" />
        <UIcon name="i-heroicons-academic-cap" />
        <UIcon name="i-heroicons-academic-cap" />
        <UIcon name="i-heroicons-academic-cap" />
      </div>
    </div>

    <div class="flex flex-col lg:flex-row lg:justify-center md:justify-evenly py-6 px-9 items-center lg:gap-8 md:gap-3 sm:gap-2">
      <div 
        v-for="(item, index) in linkItems" 
        :key="item.link" 
        class="relative"
      >
        <div class="lg:flex items-center gap-4 md:hidden sm:hidden max-sm:hidden">
          <NuxtLink 
            :to="item.path" 
            class="text-xl font-bold hover:text-red-400 transition-all duration-500"
            @click.prevent="toggleDropdown(index)"
          >
            {{ item.link }}
          </NuxtLink>
          <UIcon class="text-xl" :name="(openDropdown === index ? item.iconup : item.icondown) || 'default-icon'" />
        </div>

        <div
          v-if="item.subLink && openDropdown === index"
          class="absolute left-0 top-full mt-2 bg-white shadow-lg rounded-md p-5 z-10"
          style="min-width: 500px;"
        >
          <div class="grid grid-cols-3 gap-4">
            <div v-for="category in item.subLink" class="space-y-2">
              <ul class="space-y-1">
                <li v-for="subItem in category.items" :key="subItem.name">
                  <NuxtLink :to="subItem.path" class="block text-gray-700 hover:text-red-400">
                    {{ subItem.name }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="lg:hidden">
        <UIcon name="i-heroicons-bars-3-bottom-right" class="text-3xl" @click="isOpen = true" />
      </div>

      <USlideover v-model="isOpen">
        <div class="p-4 flex-1">
          <UButton
            color="gray"
            variant="ghost"
            size="sm"
            icon="i-heroicons-x-mark-20-solid"
            class="flex absolute end-5 top-5 z-10"
            square
            padded
            @click="isOpen = false"
          />
          <div 
            v-for="(item, index) in linkItems" 
            :key="item.link" 
            class="relative mb-4"
          >
            <NuxtLink 
              :to="item.path" 
              class="text-xl font-bold hover:text-red-400 transition-all duration-500"
              @click.prevent="toggleDropdown(index)"
            >
              {{ item.link }}
            </NuxtLink>
            <UIcon class="text-xl" :name="(openDropdown === index ? item.iconup : item.icondown) || 'default-icon'" />
            <div
              v-if="item.subLink && openDropdown === index"
              class="absolute left-0 top-full mt-2 bg-white shadow-lg rounded-md p-5 z-10"
              style="min-width: 200px;"
            >
              <div class="grid grid-cols-1 gap-4">
                <div v-for="category in item.subLink" class="space-y-2">
                  <ul class="space-y-1">
                    <li v-for="subItem in category.items" :key="subItem.name">
                      <NuxtLink :to="subItem.path" class="block text-gray-700 hover:text-red-400">
                        {{ subItem.name }}
                      </NuxtLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </USlideover>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const openDropdown = ref<number | null>(null);
const isOpen = ref(false);

const toggleDropdown = (index: number) => {
  openDropdown.value = openDropdown.value === index ? null : index;
};

const linkItems = [
  {
    link: "Home",
    path: '/',
    iconup: 'i-heroicons-chevron-up-16-solid',
    icondown: 'i-heroicons-chevron-down-16-solid',
    subLink: [
      {
        title: 'Category 1',
        items: [
          { name: 'Craft Brewery', path: '/subitem-1' },
          { name: 'Promo', path: '/subitem-2' },
        ],
      },
      {
        title: 'Category 2',
        items: [
          { name: 'Beer Pub', path: '/subitem-3' },
          { name: 'Beer Parallax', path: '/subitem-4' },
        ],
      },
      {
        title: 'Category 3',
        items: [
          { name: 'Sliced', path: '/subitem-5' },
          { name: 'Restaurant', path: '/subitem-6' },
          { name: 'Beer Brand', path: '/subitem-7' },
        ],
      },
    ],
  },
  {
    link: "About Us",
    path: '/',
    iconup: 'i-heroicons-chevron-up-16-solid',
    icondown: 'i-heroicons-chevron-down-16-solid',
    subLink: [
      {
        title: 'Company',
        items: [
          { name: 'Our Team', path: '/our-team' },
          { name: 'Our Testimonial', path: '/our-story' },
        ],
      },
      {
        title: 'Careers',
        items: [
          { name: 'FQA', path: '/Fqa' },
        ],
      },
    ],
  },
  {
    link: "Products",
    path: '/',
    iconup: 'i-heroicons-chevron-up-16-solid',
    icondown: 'i-heroicons-chevron-down-16-solid',
    subLink: [
      {
        title: 'Products',
        items: [
          { name: 'Shop', path: '/our-team' },
          { name: 'Checkout', path: '/our-story' },
        ],
      },
      {
        title: 'Careers',
        items: [
          { name: 'Carts', path: '/Fqa' },
          { name: 'My Accounts', path: '/Fqa' },
        ],
      },
    ],
  },
  {
    link: "Blog",
    path: '/',
    iconup: 'i-heroicons-chevron-up-16-solid',
    icondown: 'i-heroicons-chevron-down-16-solid',
    subLink: [
      {
        items: [
          { name: 'Blog With Sidebar', path: '/our-team' },
          { name: 'Without Sidebar', path: '/our-story' },
        ],
      },
    ],
  },
  {
    link: "Page",
    path: '/',
    iconup: 'i-heroicons-chevron-up-16-solid',
    icondown: 'i-heroicons-chevron-down-16-solid',
    subLink: [
      {
        items: [
          { name: 'Typography', path: '/our-team' },
          { name: 'Form Elements', path: '/our-story' },
        ],
      },
      {
        items: [
          { name: 'ShortCode', path: '/Fqa' },
          { name: 'List', path: '/Fqa' },
        ],
      },
    ],
  },
  {
    link: "Gallery",
    path: '/',
    iconup: 'i-heroicons-chevron-up-16-solid',
    icondown: 'i-heroicons-chevron-down-16-solid',
    subLink: [
      {
        title: 'Photos',
        items: [
          { name: 'Nature', path: '/our-team' },
          { name: 'City', path: '/our-story' },
        ],
      },
      {
        title: 'Videos',
        items: [
          { name: 'Travel', path: '/Fqa' },
          { name: 'Wildlife', path: '/Fqa' },
        ],
      },
    ],
  },
  {
    link: "Contacts",
    path: '/',
  },
];
</script>

<style scoped>

</style>

