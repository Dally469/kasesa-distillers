// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
   runtimeConfig: {
    public: {
      baseUrl: process.env.BASE_URL || "XXXXXXXXXXXXXXXXXXXXX",
    },
  },
  modules: ["@nuxt/ui", "@pinia/nuxt"],
  colorMode: {
    preference: "light",
    fallback: "light",
  },
  pinia: {},

  imports: {
    dirs: ["./stores"],
  },
});