import {defineStore} from "pinia";

import {
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged
} from "@firebase/auth";

import {auth} from "~/plugins/firebase";

type Auth = {
  credentials: {
    id?: string
  }
}

type LoginData = {
  email: string,
  password: string
}

export const useAuthStore = defineStore('auth', {
  state: (): Auth => ({
    credentials: {}
  }),
  getters: {
    isLogged: (state) => {
      return !!state.credentials.id;
    },
    getUserId: (state) => {
      return state.credentials.id;
    }
  },
  actions: {
    async init() {
      return new Promise((resolve, reject) => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            this.credentials.id = user.uid;
            resolve(true);
          } else {
            this.credentials = {};
            resolve(false);
          }
          unsubscribe();
        });
      });
    },
    login({email, password}: LoginData) {
      return new Promise((resolve, reject) => {
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            this.credentials.id = userCredential.user.uid;
            navigateTo('/projects');
            resolve(true);
          })
          .catch((error) => {
            console.error('login error', error);
            reject(false);
          });
      })
    },
    async logout() {
      try {
        await signOut(auth);
        this.credentials = {};
        navigateTo('/');
      } catch (e) {
        console.log('logout error', e);
      }
      return true;
    }
  }
});
