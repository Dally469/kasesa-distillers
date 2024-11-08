<template>
  <div class="  flex flex-col justify-center items-center">
    <Header :item="mainHead[0]" />
    <div id="contact">
      <div
        class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 grid md:grid-cols-3 lg:grid-cols-3 gap-y-8 md:gap-x-8 md:gap-y-8 lg:gap-x-8 lg:gap-y-16">
        <div>
          <h2 class="text-4xl font-bold dark:text-gray-100">Contact Us</h2>
          <p class="max-w-sm mt-4 mb-4 dark:text-gray-400">Have something to say? We are here to help. Fill up the
            form or send email or call phone.</p>
          <div class="flex items-center mt-8 space-x-2 text-dark-600 dark:text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6">
              <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
              <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z">
              </path>
            </svg><span>14th avenue glory road</span>
          </div>
          <div class="flex items-center mt-2 space-x-2 text-dark-600 dark:text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" aria-hidden="true" class="w-4 h-4">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75">
              </path>
            </svg>
            <a href="mailto:hello@company.com">hello@company.com</a>
          </div>
          <div class="flex items-center mt-2 space-x-2 text-dark-600 dark:text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" aria-hidden="true" class="w-4 h-4">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z">
              </path>
            </svg>
            <a href="tel:11111111111">+250 11111111111</a>
          </div>

          <div class="mt-12">
            <h2 class="text-lg font-extrabold">Socials Media</h2>
            <ul class="flex mt-3 space-x-4">
              <li class="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <a href="javascript:void(0)">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='#007bff' viewBox="0 0 24 24">
                    <path
                      d="M6.812 13.937H9.33v9.312c0 .414.335.75.75.75l4.007.001a.75.75 0 0 0 .75-.75v-9.312h2.387a.75.75 0 0 0 .744-.657l.498-4a.75.75 0 0 0-.744-.843h-2.885c.113-2.471-.435-3.202 1.172-3.202 1.088-.13 2.804.421 2.804-.75V.909a.75.75 0 0 0-.648-.743A26.926 26.926 0 0 0 15.071 0c-7.01 0-5.567 7.772-5.74 8.437H6.812a.75.75 0 0 0-.75.75v4c0 .414.336.75.75.75zm.75-3.999h2.518a.75.75 0 0 0 .75-.75V6.037c0-2.883 1.545-4.536 4.24-4.536.878 0 1.686.043 2.242.087v2.149c-.402.205-3.976-.884-3.976 2.697v2.755c0 .414.336.75.75.75h2.786l-.312 2.5h-2.474a.75.75 0 0 0-.75.75V22.5h-2.505v-9.312a.75.75 0 0 0-.75-.75H7.562z"
                      data-original="#000000" />
                  </svg>
                </a>
              </li>
              <li class="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <a href="javascript:void(0)">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='#007bff'
                    viewBox="0 0 511 512">
                    <path
                      d="M111.898 160.664H15.5c-8.285 0-15 6.719-15 15V497c0 8.285 6.715 15 15 15h96.398c8.286 0 15-6.715 15-15V175.664c0-8.281-6.714-15-15-15zM96.898 482H30.5V190.664h66.398zM63.703 0C28.852 0 .5 28.352.5 63.195c0 34.852 28.352 63.2 63.203 63.2 34.848 0 63.195-28.352 63.195-63.2C126.898 28.352 98.551 0 63.703 0zm0 96.395c-18.308 0-33.203-14.891-33.203-33.2C30.5 44.891 45.395 30 63.703 30c18.305 0 33.195 14.89 33.195 33.195 0 18.309-14.89 33.2-33.195 33.2zm289.207 62.148c-22.8 0-45.273 5.496-65.398 15.777-.684-7.652-7.11-13.656-14.942-13.656h-96.406c-8.281 0-15 6.719-15 15V497c0 8.285 6.719 15 15 15h96.406c8.285 0 15-6.715 15-15V320.266c0-22.735 18.5-41.23 41.235-41.23 22.734 0 41.226 18.495 41.226 41.23V497c0 8.285 6.719 15 15 15h96.403c8.285 0 15-6.715 15-15V302.066c0-79.14-64.383-143.523-143.524-143.523zM466.434 482h-66.399V320.266c0-39.278-31.953-71.23-71.226-71.23-39.282 0-71.239 31.952-71.239 71.23V482h-66.402V190.664h66.402v11.082c0 5.77 3.309 11.027 8.512 13.524a15.01 15.01 0 0 0 15.875-1.82c20.313-16.294 44.852-24.907 70.953-24.907 62.598 0 113.524 50.926 113.524 113.523zm0 0"
                      data-original="#000000" />
                  </svg>
                </a>
              </li>
              <li class="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <a href="javascript:void(0)">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='#007bff' viewBox="0 0 24 24">
                    <path
                      d="M12 9.3a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 0 0 0-5.4Zm0-1.8a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm5.85-.225a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0ZM12 4.8c-2.227 0-2.59.006-3.626.052-.706.034-1.18.128-1.618.299a2.59 2.59 0 0 0-.972.633 2.601 2.601 0 0 0-.634.972c-.17.44-.265.913-.298 1.618C4.805 9.367 4.8 9.714 4.8 12c0 2.227.006 2.59.052 3.626.034.705.128 1.18.298 1.617.153.392.333.674.632.972.303.303.585.484.972.633.445.172.918.267 1.62.3.993.047 1.34.052 3.626.052 2.227 0 2.59-.006 3.626-.052.704-.034 1.178-.128 1.617-.298.39-.152.674-.333.972-.632.304-.303.485-.585.634-.972.171-.444.266-.918.299-1.62.047-.993.052-1.34.052-3.626 0-2.227-.006-2.59-.052-3.626-.034-.704-.128-1.18-.299-1.618a2.619 2.619 0 0 0-.633-.972 2.595 2.595 0 0 0-.972-.634c-.44-.17-.914-.265-1.618-.298-.993-.047-1.34-.052-3.626-.052ZM12 3c2.445 0 2.75.009 3.71.054.958.045 1.61.195 2.185.419A4.388 4.388 0 0 1 19.49 4.51c.457.45.812.994 1.038 1.595.222.573.373 1.227.418 2.185.042.96.054 1.265.054 3.71 0 2.445-.009 2.75-.054 3.71-.045.958-.196 1.61-.419 2.185a4.395 4.395 0 0 1-1.037 1.595 4.44 4.44 0 0 1-1.595 1.038c-.573.222-1.227.373-2.185.418-.96.042-1.265.054-3.71.054-2.445 0-2.75-.009-3.71-.054-.958-.045-1.61-.196-2.185-.419A4.402 4.402 0 0 1 4.51 19.49a4.414 4.414 0 0 1-1.037-1.595c-.224-.573-.374-1.227-.419-2.185C3.012 14.75 3 14.445 3 12c0-2.445.009-2.75.054-3.71s.195-1.61.419-2.185A4.392 4.392 0 0 1 4.51 4.51c.45-.458.994-.812 1.595-1.037.574-.224 1.226-.374 2.185-.419C9.25 3.012 9.555 3 12 3Z">
                    </path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h2 class="text-4xl font-bold dark:text-gray-100 text-center pb-7">Openning Hour</h2>
          <div class="">
            <div v-for="item in opennig" class=" flex space-y-3 items-center gap-6">
              <h2 class="w-full font-bold text-red-500">{{ item.day }}:</h2>
              <div class=" w-full h-px max-w-6xl mx-auto my-20"
                style="background-image: linear-gradient(90deg, rgba(149, 131, 198, 0) 1.46%, rgba(149, 131, 198, 0.6) 40.83%, rgba(149, 131, 198, 0.3) 65.57%, rgba(149, 131, 198, 0) 107.92%);">
              </div>
              <p class="w-full text-end">{{ item.hour }}</p>
            </div>
          </div>
        </div>
        <img src="/assets/images/products/cabinet-coconut.png" class="h-48"alt="">
      </div>
      <!-- About OUR COMPANY -->
      <section class=" w-full my-8 bg-slate-100 rounded-2xl">
        <div
          class="relative max-w-screen-2xl px-4 sm:px-8 mx-auto grid grid-cols-12 gap-x-6 overflow-hidden reverse items-center">



          <div class="col-span-12 space-y-4 rounded-2xl bg-white lg:col-span-4    ">
            <div class="max-w-full p-4  lg:mb-0">
              <span class="block mb-4 text-base text-red-500 font-semibold">
                Contact Us
              </span>
              <h2 class="
          text-dark
         
          uppercase
          font-bold
          text-[32px]
              
          ">
                GET IN TOUCH WITH US
              </h2>


            </div>
            <div class="bg-white/10 relative rounded-lg p-8 sm:p-12  ">
              <form>
                <div class="mb-6">
                  <input type="text" placeholder="Your Name" class="
                w-full
                rounded
                py-3
                px-[14px]
                bg-white/10 text-base
                border border-slate-300
                outline-none
                focus-visible:shadow-none
                focus:border-red-500
                " />
                </div>
                <div class="mb-6">
                  <input type="email" placeholder="Your Email" class="
                w-full
                rounded
                py-3
                px-[14px]
                 bg-white/10 text-base
                border border-slate-300
                outline-none
                focus-visible:shadow-none
                focus:border-red-500
                " />
                </div>
                <div class="mb-6">
                  <input type="text" placeholder="Your Phone" class="
                w-full
                rounded
                py-3
                px-[14px]
                bg-white/10 text-base
                border border-slate-300
                outline-none
                focus-visible:shadow-none
                focus:border-red-500
                " />
                </div>
                <div class="mb-6">
                  <textarea rows="3" placeholder="Your Message" class="
                w-full
                rounded
                py-3
                px-[14px]
                bg-white/10 text-base
                border border-slate-300
                resize-none
                outline-none
                focus-visible:shadow-none
                focus:border-red-500
                "></textarea>
                </div>
                <div>
                  <button type="submit"
                    class="flex items-center justify-center text-center w-full gap-2 dark:border border-red-500  hover:text-red-500 text-white hover:bg-white dark:hover:bg-transparent  duration-200 ease-out  rounded-lg px-6 py-3 bg-red-500 ">
                    Send Message
                  </button>
                </div>
              </form>
              <div>


              </div>
            </div>
          </div>
          <div class="col-span-12 lg:col-span-8   space-y-6 px-4 sm:px-6 mt-20">

            <div class="relative  grid grid-cols-12 gap-x-6 gap-y-6 overflow-hidden items-center">

              <div
                class="flex group bg-white rounded-xl h-24 col-span-12 lg:col-span-4   w-full items-center cursor-pointer">
                <div
                  class="relative  flex  flex-col duration-500  items-center text-center cursor-pointer  justify-center mx-2 h-10 w-10   bg-transparent overflow-hidden rounded  transition duration ease-out group">
                  <img class="h-10 w-10 transition duration-500 ease-in-out transform  m-2   rounded-lg  object-cover "
                    src="/assets/images/emails.png" />
                </div>
                <div class="flex-col duration-500 group-hover:translate-x-2">

                  <span class="text-xs text-muted font-light ">Email </span>
                  <p class="text-red-500 text-md group-hover:text-red-700">info@kasesa.com / sales@kasesa.com</p>
                </div>
              </div>
              <div
                class="flex group bg-white rounded-xl h-24 col-span-12 lg:col-span-4   w-full items-center cursor-pointer">
                <div
                  class="relative  flex  flex-col duration-500  items-center text-center cursor-pointer  justify-center mx-2 h-12 w-12   bg-transparent overflow-hidden rounded  transition duration ease-out group">
                  <img class="h-12 w-12  transition duration-500 ease-in-out transform  m-2   rounded-lg  object-cover "
                    src="/assets/images/phones.png" />
                </div>
                <div class="flex-col duration-500 group-hover:translate-x-2">

                  <span class="text-xs text-muted font-light ">Phone</span>
                  <p class="text-red-500 text-md group-hover:text-red-700">(+250)78304204</p>
                </div>
              </div>
              <div
                class="flex group bg-white rounded-xl h-24 col-span-12 lg:col-span-4   w-full items-center cursor-pointer">
                <div
                  class="relative  flex  flex-col duration-500  items-center text-center cursor-pointer  justify-center mx-2 h-11 w-11   bg-transparent overflow-hidden rounded  transition duration ease-out group">
                  <img class="h-11 w-11 transition duration-500 ease-in-out transform  m-2   rounded-lg  object-cover "
                    src="/assets/images/locations.png" />
                </div>
                <div class="flex-col duration-500 group-hover:translate-x-2">

                  <span class="text-xs text-muted font-light ">Address</span>
                  <p class="text-red-500 text-md group-hover:text-red-700">Gahanga Industrial Area, Kigali-Kicukiro
                    HOUSE
                  </p>
                </div>
              </div>

            </div>
            <div class=" rounded  h-[600px] w-full ">
              <!-- A rectangular picture -->
              <GoogleMap api-key="AIzaSyDHq7ERLIFZX2Mi79e0P_SIi5SL4ujwsw8" :scrollwheel="controls" :zoomControl="false"
                :fullscreenControl="controls" :mapTypeControl="controls" :streetViewControl="controls"
                style="width: 100%; height: 400px; " :center="center" :zoom="18" class="rounded-lg">

                <CustomMarker :options="{ position: center, anchorPoint: 'BOTTOM_CENTER' }">

                  <div tabindex="0" aria-label="tooltip 3" role="link"
                    class="focus:outline-none focus:ring-gray-300 rounded-full focus:ring-offset-2 focus:ring-2 focus:bg-gray-200 relative"
                    onmouseover="showTooltip(3)" onfocus="showTooltip(3)" onmouseout="hideTooltip(3)">
                    <div class=" cursor-pointer">
                      <img src="/assets/images/kasesa-pin.png" style="height: 50px; width: 50;" />
                    </div>
                    <div
                      class="z-20 -mt-24 w-64 absolute transition duration-150 ease-in-out left-4 ml-8 shadow-lg bg-gray-800 p-4 rounded">
                      <svg class="absolute left-0 -ml-2 bottom-0 top-0 h-full" width="9px" height="16px"
                        viewBox="0 0 9 16" version="1.1" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink">
                        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <g id="Tooltips-" transform="translate(-874.000000, -1029.000000)" fill="#2D3748">
                            <g id="Group-3-Copy-16" transform="translate(850.000000, 975.000000)">
                              <g id="Group-2" transform="translate(24.000000, 0.000000)">
                                <polygon id="Triangle"
                                  transform="translate(4.500000, 62.000000) rotate(-90.000000) translate(-4.500000, -62.000000) "
                                  points="4.5 57.5 12.5 66.5 -3.5 66.5"></polygon>
                              </g>
                            </g>
                          </g>
                        </g>
                      </svg>
                      <p class="text-sm font-bold text-white pb-1">Kasesa Distillers & Distributors Ltd</p>
                      <p class="text-xs leading-4 text-white pb-3">We are dedicated to producing Liquors of the highest
                        quality, using only the finest ingredients and adhering to rigorous production standards.</p>
                      <p class="text-xs leading-4 text-white pb-1">Reach us here </p>

                    </div>
                  </div>


                </CustomMarker>


              </GoogleMap>
            </div>
          </div>

        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { GoogleMap, CustomMarker, Polygon } from 'vue3-google-map'
const center = { lat: -2.036711, lng: 30.098709};

const controls = ref(false)
const mainHead = [
  {
    title: "Contact Us",
    path: "Home/Contants"
  }
];
const opennig = [
  {
    day: "Monday",
    hour: "9:00 - 17:00"
  },
  {
    day: "Tuesday",
    hour: "9:00 - 17:00"
  },
  {
    day: "Wednesday",
    hour: "9:00 - 17:00"
  },
  {
    day: "Thursday",
    hour: "9:00 - 17:00"
  },
  {
    day: "Friday",
    hour: "9:00 - 17:00"
  },
  {
    day: "Saturday",
    hour: "11:00 - 17:00"
  },
  {
    day: "Sunday",
    hour: "Closed"
  },
]
</script>

<style></style>