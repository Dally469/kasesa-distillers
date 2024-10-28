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
        <div :class="[open ? 'flex' : 'hidden lg:flex']" class="space-x-3">
          <nuxt-link to="/contact-us"
            class="flex align-center gap-1 dark:border border-red-500  hover:text-red-500 text-white hover:bg-white dark:hover:bg-transparent  duration-200 ease-out  rounded-lg px-6 py-2 bg-red-500 ">
            Get in Touch
          </nuxt-link>
          <div @click="toggleDarkMode($colorMode.preference === 'dark' ? 'light' : 'dark')"
            class="flex w-12 h-12 bg-transparent cursor-pointer rounded-lg items-center border border-red-500 justify-center  ">
            <UIcon name="i-heroicons-moon" v-if="$colorMode.preference === 'light'" class="items-center text-red-500"
              stroke-width="1.5" />
            <UIcon name="i-heroicons-sun" v-else class="items-center  border-red-500 dark:text-red-500"
              stroke-width="1.5x`" />
          </div>

        </div>
        <button class="rounded-lg lg:hidden focus:outline-none focus:shadow-outline" @click="open = !open">
          <UIcon name="i-heroicons-bars-3" class="text-slate-700 dark:text-slate-400" v-if="!open" :size="24" />
          <UIcon name="i-heroicons-x-mark" class="text-slate-700 dark:text-slate-400" v-else :size="24" />
        </button>
      </div>
    </div>
    <nav id="navbar" class="relative z-10 w-full    dark:text-muted">
      <div class="flex flex-col max-w-screen-2xl   px-8 mx-auto lg:items-center lg:justify-center lg:flex-row py-2">
        <div class="flex flex-col lg:flex-row items-center space-x-4 xl:space-x-8 ">

          <ul :class="[open ? 'flex' : 'hidden lg:flex']"
            class="w-full h-auto flex  items-center flex-col  dark:text-muted flex-grow uppercase xl:gap-6 mt-6 lg:items-center pb-4 lg:pb-0 lg:justify-end lg:flex-row origin-top duration-300 xl:space-x-4 space-y-4 lg:space-y-0">
            <NavLinkVue v-for="(menu, index) in linkItems"
              @click="menu.isDropdown ? dropdownToggler(menu.id) : chooseMenu(menu.id)"  :name="menu.link"
              :url="menu.url" :id="menu.id" :selectedId="selected" :isDrop="menu.isDropdown" />
          </ul>
        </div>


      </div>
      <div v-if="dropdownNavbar" class="w-full dark:bg-white/10 dark:text-muted  shadow-xl">
        <BaseDropdownProducts v-if="selected == 2" />

      </div>

    </nav>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

import NavLinkVue from "@/components/layouts/others/NavLink";
import BaseDropdownProducts from "@/components/layouts/dropdown/Product";

const colorMode = useColorMode()
console.log(colorMode.preference)
const open = ref(false)
let selected = ref(1)

const dropdownNavbar = ref(false)
if (process.client) {
  let activeTab = localStorage.getItem("navemenu-active");
  selected.value = activeTab;
  console.log(selected)
}
function dropdownToggler(tab: any) {
  dropdownNavbar.value = !dropdownNavbar.value
  selected.value = tab
  open.value = false
}

function toggleDarkMode(theme: any) {
  useColorMode().preference = theme
}

function chooseMenu(tab: any) {
  selected.value = tab
  dropdownNavbar.value = false
  localStorage.setItem("navemenu-active", tab);

}


const openDropdown = ref<number | null>(null);
const isOpen = ref(false);

const toggleDropdown = (index: number) => {
  openDropdown.value = openDropdown.value === index ? null : index;
};

const linkItems = [
  {
    link: "Home",
    url: '/',
    id: 1,
    isDropdown: false
    
  },
  {
    link: "Products",
    path: '/',
    id: 2,
    isDropdown: true
   
  },
  {
    link: "Contacts",
    path: '/',
    id: 3,
    isDropdown: false
  },
];
</script>

<style scoped></style>
