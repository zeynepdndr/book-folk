import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBKTECLKdAgXJJcN9EWX1T7-XyOJQgaJGM",
  authDomain: "book-folk.firebaseapp.com",
  projectId: "book-folk",
  storageBucket: "book-folk.appspot.com",
  messagingSenderId: "679648887274",
  appId: "1:679648887274:web:af926ea54e536cb2343293",
  measurementId: "G-EVDZEMZF2B",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export default app;
