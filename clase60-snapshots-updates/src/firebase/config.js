// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// Firestore
import { getFirestore, collection } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFIGFgU3dV5fBdTXGML9dPHIliLefVZAU",
  authDomain: "intro-firebase-cyf4.firebaseapp.com",
  projectId: "intro-firebase-cyf4",
  storageBucket: "intro-firebase-cyf4.appspot.com",
  messagingSenderId: "818200600607",
  appId: "1:818200600607:web:7f6c92750d6bec9fffb52a",
  measurementId: "G-BHC1PF7EQY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// get database
const db = getFirestore();
// Ref collection tweets
const tweetsCollectionRef = collection(db, "tweets");

export { db, tweetsCollectionRef };

export default app;
