import React from "react";
import useTweets from "../../../hooks/useTweets";

import "./styles.css";

const TweetForm = ({ formState, setFormState, initialState }) => {
  const { addTweet } = useTweets();

  const handleChange = (e) => {
    const formValueTemp = {
      ...formState,
      [e.target.name]: e.target.value,
    };

    setFormState(formValueTemp);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // enviar a firebase
    addTweet(formState);

    // reset form fields
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
