import React from "react";
import useTweets from "../../../hooks/useTweets";

import "./styles.css";

const Tweet = ({ text, author, date, id }) => {
  const { deleteTweet } = useTweets();

  const handleDelete = async (id) => {
    await deleteTweet(id);
  };

  return (
    <div className="tweetWrapper">
      <h2>{text}</h2>
      <div>
        <span>
          <b>Author:</b> {author}
        </span>
        <button onClick={() => handleDelete(id)}>borrar</button>
      </div>
    </div>
  );
};

export default Tweet;
