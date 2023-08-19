// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmZUnMRdJw27r809nW5Blbirmdivr2QLI",
  authDomain: "dreamepicwebapp.firebaseapp.com",
  projectId: "dreamepicwebapp",
  storageBucket: "dreamepicwebapp.appspot.com",
  messagingSenderId: "264411340924",
  appId: "1:264411340924:web:b2dd8df2d70a2ab087e9f9",
  measurementId: "G-GVZQ44PVDW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  export const googleProvider = new GoogleAuthProvider();