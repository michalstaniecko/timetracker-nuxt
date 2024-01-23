import {defineStore} from "pinia";
import {useAuthStore} from "~/stores/auth";

export const useAppStore = defineStore('app', {
  state: () => ({
    initialized: false
  }),
  getters: {
    isInitialized: (state) => {
      return state.initialized;
    }
  },
  actions: {
    async init() {
      const authStore = useAuthStore();
      await authStore.init();
      this.initialized = true;
    }
  }
});
