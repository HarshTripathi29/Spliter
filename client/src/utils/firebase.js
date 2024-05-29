// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwMapw95tVjnP5lG1Svp-8RlARq1lirrw",
  authDomain: "spliter-17a14.firebaseapp.com",
  projectId: "spliter-17a14",
  storageBucket: "spliter-17a14.appspot.com",
  messagingSenderId: "236699639964",
  appId: "1:236699639964:web:ddfbaa95f2c35ef4f7cd59"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
