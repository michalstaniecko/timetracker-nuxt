<script setup lang="ts">
import { useAuthStore } from '@/stores/auth';

const authStore = useAuthStore();

const {isLogged} = storeToRefs(authStore);

function handleLogout() {
  authStore.logout();
}
</script>

<template>
  <div class="navigation">
    <div class="navigation__logo">
      TimeTracker
    </div>
    <div class="navigation__links">
      <ul>
        <li>
          <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/about">About</nuxt-link>
        </li>
        <li v-if="isLogged">
          <nuxt-link to="/projects">Projects</nuxt-link>
        </li>
        <li v-if="!isLogged">
          <nuxt-link to="/login">Login</nuxt-link>
        </li>
        <li v-if="isLogged">
          <button @click="handleLogout">Logout</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>
