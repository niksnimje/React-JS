// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsUODZeXhWz06KCjmjDgFK67loTFz22ww",
  authDomain: "fir-storage-965d0.firebaseapp.com",
  projectId: "fir-storage-965d0",
  storageBucket: "fir-storage-965d0.appspot.com",
  messagingSenderId: "20336568797",
  appId: "1:20336568797:web:093192734756af1046ae34"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };


