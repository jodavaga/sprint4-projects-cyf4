import React, { useEffect } from "react";
// database firestore
import {
  usersCollectionRef,
  tweetsCollectionRef,
  getDocuments,
} from "./firebase/config";

import { addDoc } from "firebase/firestore";

import logo from "./logo.svg";
import "./App.css";
import TweetInput from "./components/tweetInput/TweetInput";

function App() {
  const createNewUser = () => {
    // creamos el docuemnto
    addDoc(usersCollectionRef, {
      name: "Jose D.",
      username: "jodavaga",
      active: false,
    })
      .then((docRef) => {
        console.log(`El Documento tiene Id: ${docRef.id}`);
        return docRef;
      })
      .catch((e) => console.log("Error:", e));
  };

  useEffect(() => {
    // Obtenemos los snapshots de la coleccion
    getDocuments(tweetsCollectionRef);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Clase 58 - Introduccion a Firebase</p>

        <TweetInput />

        <span className="App-link" onClick={createNewUser}>
          Add New User
        </span>
      </header>
    </div>
  );
}

export default App;
