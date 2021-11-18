import React, { useEffect } from "react";
import logo from "./logo.svg";
import { collection, addDoc } from "firebase/firestore";
import { database } from "./firebase/config";
import "./App.css";

const usuario = {
  name: "jose D.",
  username: "jodavaga",
  active: true,
};

function App() {
  const handleClick = async () => {
    try {
      // creemos users
      const docRef = await addDoc(collection(database, "usuarios"), usuario);
      alert(`userAdded: ${docRef.id}`);
      console.log("🚀 ~ ~ docRef", docRef.id);
    } catch (e) {
      console.log("🚀 ~ file: App.js ~ line 18 ~ handleClick ~ e", e);
    }
  };
  useEffect(() => {}, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Clase 58 - Introduccion a Firebase</p>
        <span className="App-link" onClick={handleClick}>
          Add New User to Firestore
        </span>
      </header>
    </div>
  );
}

export default App;
