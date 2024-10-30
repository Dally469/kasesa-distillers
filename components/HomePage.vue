<template>
  <div>

    <section
      class="relative h-screen flex items-center justify-center py-10   sm:py-16 lg:py-24 text-white text-center">
      <!-- Background Slideshow with <img> tag -->
      <div class="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div v-for="(image, index) in images" :key="index" :class="[
          'absolute inset-0 w-full h-full bg-cover  bg-center transition-opacity duration-1000 ease-in-out',
          { 'opacity-100 bg-black bg-opacity-20': currentImageIndex === index, 'opacity-0': currentImageIndex !== index },
        ]" :style="{ backgroundImage: `url(${image})` }"></div>
      </div>
      <!-- Text Overlay -->
      <div class="absolute bottom-10   z-10 bg-black bg-opacity-0 py-6   rounded-lg">
        <div class="  max-w-screen-2xl  px-4 mx-auto sm:px-6 lg:px-8">
          <div class="grid items-center grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-20">
            <div class="">
              <h2 class="text-5xl text-left flex flex-col pb-2 text font-bold leading-tight text-red-600 sm:text-4xl lg:text-5xl">
                <span class="lg:text-7xl">KASESA Distillers & Distributors Ltd</span>
                <span class=" text-white lg:text-7xl">Poeple's Choice</span>
              </h2>
              <p class="mt-4 text-base leading-relaxed text-gray-100">
                Nam aliquet tincidunt ante, ac tempus quam faucibus vel. Cras volutpat interdum mi at sodales. Morbi
                posuere, magna at finibus feugiat, ex ipsumante
              </p>
              <div class="py-5">
                <button
                  class="bg-red-500 font-bold px-14 py-4 rounded-full hover:border-2 duration-200 hover:bg-transparent hover:border-red-500">Get
                  Beer</button>
              </div>
            </div>

            <div class="relative pl-20 pr-6 sm:pl-6 md:px-0">
              <div class="relative w-full  mt-4 mb-10 ml-auto">
                <img class="ml-auto" src="../assets/battles.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="py-10 hidden sm:py-16 lg:py-24">
      <div class="max-w-7xl px-4 mx-auto sm:px-6 lg:px-8">
        <div class="grid items-center grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-20">
          <div class="">
            <h2 class="text-5xl flex flex-col font-bold leading-tight text-red-500 sm:text-4xl lg:text-5xl">
              <span class="lg:text-7xl">Craft Beer</span>
              <span class=" text-white lg:text-7xl">Brewery</span>
            </h2>
            <p class="mt-4 text-base leading-relaxed text-gray-100">
              Nam aliquet tincidunt ante, ac tempus quam faucibus vel. Cras volutpat interdum mi at sodales. Morbi
              posuere, magna at finibus feugiat, ex ipsumante
            </p>
            <div class="py-5">
              <button
                class="bg-red-500 font-bold px-14 py-4 rounded-full hover:border-2 duration-200 hover:bg-transparent hover:border-red-500">Get
                Beer</button>
            </div>
          </div>

          <div class="relative pl-20 pr-6 sm:pl-6 md:px-0">
            <div class="relative w-full  mt-4 mb-10 ml-auto">
              <img class="ml-auto" src="../assets/battles.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import Navbar from '~/components/Navbar.vue';

export default defineComponent({
  components: { Navbar },
  setup() {
    // Store paths to images in the `assets` folder
    const images = ref<string[]>([
      "https://cdn.sanity.io/images/0cweren3/production/b659d1f55990cd38fd23dac98b20a6b5e83a18b4-6000x4000.jpg?w=3840&q=75&fit=max&auto=format",
      "https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/34/2023/12/GettyImages-1288968311-920x609.jpg",
      "https://www.suntoryglobalspirits.com/sites/default/files/styles/original/public/2024-02/Whiskey-hero%20card.png.webp?itok=KQv4MQSx",
      "https://img.freepik.com/free-photo/russian-vodka-background_8353-1240.jpg?t=st=1730277823~exp=1730281423~hmac=629c344304c38aaf8d8bd8f9e979843163283983cbd4ce256ad51036ca6b91f2&w=996"

    ]);
    const currentImageIndex = ref<number>(0);

    const startSlideShow = () => {
      setInterval(() => {
        currentImageIndex.value = (currentImageIndex.value + 1) % images.value.length;
      }, 6000);
    };

    onMounted(() => {
      startSlideShow();
    });

    return {
      images,
      currentImageIndex,
    };
  },
});
</script>

<style></style>