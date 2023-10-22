import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyD3vrHMLYhCoMM31-VTzsCHH9SKJr0qalk",
  authDomain: "fbwebmindz.firebaseapp.com",
  projectId: "fbwebmindz",
  storageBucket: "fbwebmindz.appspot.com",
  messagingSenderId: "980853762969",
  appId: "1:980853762969:web:2d3a73239c2a0657724108"
};


let app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
export default app;