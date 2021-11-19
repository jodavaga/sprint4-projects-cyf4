import React, { useEffect } from "react";
// database firestore
import { database } from "./firebase/config";
import { collection, addDoc } from "firebase/firestore";

import logo from "./logo.svg";
import "./App.css";

function App() {
  const createNewUser = () => {
    // referencia a la coleccion
    const collectionRef = collection(database, "usuarios");

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
