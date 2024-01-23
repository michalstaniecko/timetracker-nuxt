<script setup lang="ts">
import {useAppStore} from "~/stores/app";

const appStore = useAppStore();

const {isInitialized} = storeToRefs(appStore);

onMounted(() => {
  appStore.init();
});
</script>

<template>
  <div v-if="isInitialized">
    <Navigation />
    <RouterView />
  </div>
  <div v-else>
    Loading...
  </div>
</template>
