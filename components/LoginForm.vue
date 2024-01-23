<script setup lang="ts">
import {useAuthStore} from "~/stores/auth";

const authStore = useAuthStore();

const email = ref('');
const password = ref('');

function handleSubmit() {
  console.log(email.value, password.value);
  authStore.login({email: email.value, password: password.value});
}
</script>

<template>
  <div>
    <form @submit.prevent="handleSubmit" novalidate>
      <input type="text" v-model="email"/>
      <input type="password" v-model="password"/>
      <button type="submit">
        Login
      </button>
    </form>
  </div>
</template>

<style scoped>

</style>
