import {getIsAuth} from "~/plugins/firebase";

export default defineNuxtRouteMiddleware(async (to, from) => {
  const isAuth = await getIsAuth();

  if (!isAuth && to.meta.requiresAuth) return navigateTo('/login');

  if (isAuth && to.meta.requiresGuest) return navigateTo('/projects');
})
