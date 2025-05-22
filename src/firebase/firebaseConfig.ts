// src/firebase/firebaseConfig.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAtSwGVH_rFBk6EdeQQ91VJoN4Fn6wHdU8',
  authDomain: 'homyfind-app.firebaseapp.com',
  projectId: 'homyfind-app',
  storageBucket: 'homyfind-app.firebasestorage.app',
  messagingSenderId: '1061060765252',
  appId: '1:1061060765252:web:85b0e7da05db7f0fd67e11',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
