import React, { useState } from "react";
import useTweetCollection from "../../../hooks/useTweetCollection";

import "./styles.css";

const TweetForm = () => {
  const [formState, setFormState] = useState({
    tweet: "",
    author: "",
  });

  // custom hook
  const { addNewTweet } = useTweetCollection();

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // enviar la data a Firestore
    // crear un documento en la coleccion de tweets
    console.log("🚀 ~ Data to firestore:", formState);
    addNewTweet(formState);
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
          <input
            placeholder="Author"
            name="author"
            autoComplete="off"
            value={formState.author}
            onChange={handleChange}
          />
          <button type="submit">Enviar tweet</button>
        </div>
      </form>
    </div>
  );
};

export default TweetForm;
