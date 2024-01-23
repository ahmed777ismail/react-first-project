// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_A5rd2aWdwMArlCHH14uUGWD7LZYUu6Y",
  authDomain: "e-commerce-405713.firebaseapp.com",
  projectId: "e-commerce-405713",
  storageBucket: "e-commerce-405713.appspot.com",
  messagingSenderId: "1003986401958",
  appId: "1:1003986401958:web:545b01ac5a30137ae15267",
  measurementId: "G-75LDSMNERK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);
