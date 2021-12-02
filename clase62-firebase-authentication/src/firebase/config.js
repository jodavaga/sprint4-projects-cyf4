// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Authentication
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRMSRuKc74_66riZ42F_llvwsMTR6v-UA",
  authDomain: "unproyecto-cyf4.firebaseapp.com",
  projectId: "unproyecto-cyf4",
  storageBucket: "unproyecto-cyf4.appspot.com",
  messagingSenderId: "500279096970",
  appId: "1:500279096970:web:de8a3ee6d04a55a32c1f73",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Auth
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };

export default app;
