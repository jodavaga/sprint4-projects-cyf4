import { initializeApp } from "firebase/app";
// More fucntionalities
import { getFirestore, collection, getDocs } from "firebase/firestore";

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
const appFirebase = initializeApp(firebaseConfig);

export const database = getFirestore();

// referencia a la coleccion
export const usersCollectionRef = collection(database, "usuarios");
export const tweetsCollectionRef = collection(database, "tweets");

// Functions
async function getFireStore() {
  const firetoreRef = await getFirestore(appFirebase);
  console.log(firetoreRef.type);
}

async function getDocuments(refCollection) {
  const querySnapshot = await getDocs(refCollection);
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
  });
}

export { getFireStore, getDocuments };
export default appFirebase;
