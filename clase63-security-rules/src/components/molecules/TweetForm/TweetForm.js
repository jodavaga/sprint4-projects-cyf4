import React, { useState, useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";
import useTweetCollection from "../../../hooks/useTweetCollection";

import "./styles.css";

const initialState = {
  tweet: "",
  author: "",
  uid: "",
  email: "",
};

const TweetForm = () => {
  const [formState, setFormState] = useState(initialState);

  // custom hook
  const { addNewTweet } = useTweetCollection();
  const { user } = useContext(UserContext);

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
      author: user ? user.displayName : "Desconocido",
      uid: user && user.uid,
      email: user && user.email,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // enviar la data a Firestore
    // crear un documento en la coleccion de tweets
    console.log("🚀 ~ Data to firestore:", formState);
    addNewTweet(formState);

    // reset
    setFormState(initialState);
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <textarea
          placeholder="escribe tu tweet"
          name="tweet"
          autoComplete="off"
          onChange={handleChange}
          value={formState.tweet}
        />

        <div>
          <button type="submit">Enviar tweet</button>
        </div>
      </form>
    </div>
  );
};

export default TweetForm;
