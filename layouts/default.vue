<script setup>
import { RouterView } from "vue-router";
import Footer from "@/components/layouts/Footer.vue";
import NavBar from "@/components/layouts/NavBar.vue";
const route = useRoute();
const title = route.meta.title === undefined ? '' : `| ${route.meta.title}`
useHead({
  title: `KASESA Distillers && Distributors Ltd ${title}`,
  meta: [
    {
      name: "description",
      content: "Discover the essence of exceptional craftsmanship and unparalleled quality with Kasesa Distillers & Distributors Ltd. Join us in raising a glass to unforgettable moments and unforgettable flavors. Cheers to excellence, from our distillery to your glass."
    }
  ]
});
</script>
<template>
  <div class="min-h-screen  relative">
    <div class="relative">
    
      <!-- <NavBar /> -->
      <main>
        <slot />
      </main>

      <Footer/>
    </div>
  </div>
</template>