// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7Eu49eaho7dxrlklaMnWUBUL-7rfT61M",
  authDomain: "fir-tut-e563c.firebaseapp.com",
  projectId: "fir-tut-e563c",
  storageBucket: "fir-tut-e563c.appspot.com",
  messagingSenderId: "327486539357",
  appId: "1:327486539357:web:63018226461856041eafb4",
  measurementId: "G-LE19VMPPC1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();