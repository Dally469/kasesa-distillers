export default defineNuxtRouteMiddleware(async (to, from) => {
  const authStore = useAuthStore();
  if (!authStore.user) {
    return await navigateTo("/auth/login");
  }

});