// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-46ba0.firebaseapp.com",
  projectId: "mern-estate-46ba0",
  storageBucket: "mern-estate-46ba0.appspot.com",
  messagingSenderId: "1064353540356",
  appId: "1:1064353540356:web:7ffc25b4b8d7088b074851"
};

console.log(import.meta.env.VITE_FIREBASE_API_KEY);

// Initialize Firebase
export  const app = initializeApp(firebaseConfig);