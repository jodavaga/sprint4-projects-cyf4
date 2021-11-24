import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// collection
import { collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDFIGFgU3dV5fBdTXGML9dPHIliLefVZAU",
  authDomain: "intro-firebase-cyf4.firebaseapp.com",
  projectId: "intro-firebase-cyf4",
  storageBucket: "intro-firebase-cyf4.appspot.com",
  messagingSenderId: "818200600607",
  appId: "1:818200600607:web:7f6c92750d6bec9fffb52a",
  measurementId: "G-BHC1PF7EQY",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore();

// Referencia a la coleccion
const getRefCollection = (collectionPath) => collection(db, collectionPath);

export { db, getRefCollection };
export default app;
