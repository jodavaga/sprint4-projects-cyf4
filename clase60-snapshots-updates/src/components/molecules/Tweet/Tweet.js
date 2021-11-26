import React from "react";
import useTweetCollection from "../../../hooks/useTweetCollection";
import "./styles.css";

const Tweet = ({ id, text, author }) => {
  const { deleteTweet } = useTweetCollection();

  return (
    <div className="tweetWrapper">
      <h2>{text}</h2>
      <div>
        <span>
          <b>Author:</b> {author}
        </span>
        <button onClick={() => deleteTweet(id)}>borrar</button>
      </div>
    </div>
  );
};

export default Tweet;
