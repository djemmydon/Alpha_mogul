
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyD33v6BE4MccIGd7rNLufHacqiLQOYeQUI",
  authDomain: "alphamogul-4b806.firebaseapp.com",
  projectId: "alphamogul-4b806",
  storageBucket: "alphamogul-4b806.appspot.com",
  messagingSenderId: "794778939485",
  appId: "1:794778939485:web:65b4556a8cf8e30e0d1db4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

