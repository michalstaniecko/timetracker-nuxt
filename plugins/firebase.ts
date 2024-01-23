import {initializeApp} from "@firebase/app";
import {getAuth} from "@firebase/auth";
import {getFirestore} from "@firebase/firestore";

const firebaseConfig = {
  apiKey: 'AIzaSyD2woEv_8SYAyoQrox8AONUeP3h4EzAbIs',
  authDomain: 'timetracker-8bfc7.firebaseapp.com',
  projectId: 'timetracker-8bfc7',
  storageBucket: 'timetracker-8bfc7.appspot.com',
  messagingSenderId: '3968833094',
  appId: '1:3968833094:web:10e7041baba5147d77dc47'
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

async function getIsAuth(): Promise<boolean> {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      unsubscribe();
      resolve(!!user);
    }, reject);
  })
}


export {auth, db, getIsAuth};

export default () => {};
