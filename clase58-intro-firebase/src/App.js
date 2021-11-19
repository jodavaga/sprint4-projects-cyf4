import React, { useEffect } from "react";
// database firestore
import firebaseApp, { collectionRef } from "./firebase/config";
import { addDoc, getFirestore, getDocs } from "firebase/firestore";

import logo from "./logo.svg";
import "./App.css";

function App() {
  const createNewUser = () => {
    const newObj = {
      name: "Damaris",
      username: "damaris",
      active: false,
    };

    // creamos el docuemnto
    const documentRef = addDoc(collectionRef, newObj)
      .then((docRef) => {
        console.log(`El Documento tiene Id: ${JSON.stringify(docRef)}`);
        return docRef;
      })
      .catch((e) => console.log("Error:", e));
  };

  const getFireStore = async () => {
    const firetoreRef = await getFirestore(firebaseApp);
    console.log(firetoreRef.type);
  };

  const getDocuments = async () => {
    const querySnapshot = await getDocs(collectionRef);
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
    });
  };

  useEffect(() => {
    // Obtenemos los snapshots de documentos
    getDocuments();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Clase 58 - Introduccion a Firebase</p>
        <span className="App-link" onClick={createNewUser}>
          Add New User
        </span>
      </header>
    </div>
  );
}

export default App;
