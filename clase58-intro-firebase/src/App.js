import React, { useState, useEffect } from "react";
// database firestore
import firebaseApp, {
  database,
  usersCollectionRef,
  tweetsCollectionRef,
} from "./firebase/config";
import { addDoc, getFirestore, getDocs, collection } from "firebase/firestore";

import logo from "./logo.svg";
import "./App.css";

function App() {
  const [tweetText, setTweetText] = useState("");

  const createNewUser = () => {
    const newObj = {
      name: "Damaris",
      username: "damaris",
      active: false,
    };

    // creamos el docuemnto
    const documentRef = addDoc(usersCollectionRef, newObj)
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

  const getDocuments = async (refCollection) => {
    const querySnapshot = await getDocs(refCollection);
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
    });
  };

  const createTweetOnDB = async (text) => {
    const tweetRef = await addDoc(collection(database, "tweets"), {
      text,
      date: new Date(),
    });

    console.log(tweetRef.id);
  };

  const handleCreateTweet = (e) => {
    e.preventDefault();
    console.log("Event:", tweetText);

    // crear el tweet en la base de datos
    createTweetOnDB(tweetText);

    // reset el input
    setTweetText("");
  };

  useEffect(() => {
    // Obtenemos los snapshots de documentos
    getDocuments(tweetsCollectionRef);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Clase 58 - Introduccion a Firebase</p>

        <form onSubmit={handleCreateTweet}>
          <input
            placeholder="agrega un tweet"
            name="tweet"
            value={tweetText}
            onChange={(e) => setTweetText(e.target.value)}
          />
          <button type="submit">Crear tweet</button>
        </form>

        <span className="App-link" onClick={createNewUser}>
          Add New User
        </span>
      </header>
    </div>
  );
}

export default App;
