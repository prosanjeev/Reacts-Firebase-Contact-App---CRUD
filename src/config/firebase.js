// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6AskjpXo8-KyssF3-7711lvP2YbiORBU",
  authDomain: "react-firebase-contact-16de1.firebaseapp.com",
  projectId: "react-firebase-contact-16de1",
  storageBucket: "react-firebase-contact-16de1.appspot.com",
  messagingSenderId: "325363768266",
  appId: "1:325363768266:web:fa64227436054ebd8a0d33"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);