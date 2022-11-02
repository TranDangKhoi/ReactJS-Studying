// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBluuhO-MS4GJkfZbwFq-oPDIg4Am6IzCs",
  authDomain: "first-firebase-project-c2601.firebaseapp.com",
  projectId: "first-firebase-project-c2601",
  storageBucket: "first-firebase-project-c2601.appspot.com",
  messagingSenderId: "445737967489",
  appId: "1:445737967489:web:fa3a3ff21cb3e21e7c5280",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Init services
export const db = getFirestore(app);
export const auth = getAuth(app);
