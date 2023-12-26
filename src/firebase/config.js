// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJ2ARgnKMeTvCebt3yi6i-6fwepNYymT8",
  authDomain: "react-first-project-75b7f.firebaseapp.com",
  projectId: "react-first-project-75b7f",
  storageBucket: "react-first-project-75b7f.appspot.com",
  messagingSenderId: "823533718456",
  appId: "1:823533718456:web:d330ad4a9f3774f1e55d4d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
