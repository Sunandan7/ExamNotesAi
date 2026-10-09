
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "examnote-16238.firebaseapp.com",
  projectId: "examnote-16238",
  storageBucket: "examnote-16238.firebasestorage.app",
  messagingSenderId: "889359641625",
  appId: "1:889359641625:web:0c0ade67a41c61f3f54e88"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export {auth , provider}