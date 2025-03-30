import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCJuoKv-P76uy08PWtvvKdzQsnuXA60qGg",
  authDomain: "memory-game-d0049.firebaseapp.com",
  databaseURL: "https://memory-game-d0049-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "memory-game-d0049",
  storageBucket: "memory-game-d0049.firebasestorage.app",
  messagingSenderId: "267749195737",
  appId: "1:267749195737:web:138ec6a1789e5bb39b63c8"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);