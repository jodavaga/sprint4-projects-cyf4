import React from "react";
import useTweets from "../../../hooks/useTweets";

import "./styles.css";

const TweetForm = ({ formState, setFormState, initialState }) => {
  const { newTweet } = useTweets();

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
    newTweet(formState);

    // reset fields
    setFormState(initialState);
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <textarea
          placeholder="escribe tu tweet"
          name="tweet"
          onChange={handleChange}
          value={formState.tweet}
        />

        <div>
          <input
            placeholder="Author"
            name="author"
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
