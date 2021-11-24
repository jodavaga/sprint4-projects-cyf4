import React from "react";
import useTweets from "../../../hooks/useTweets";

const Tweet = ({ text, author, date }) => {
  const { deleteTweet } = useTweets();

  return (
    <div>
      <h3>{text}</h3>
      <b>Author: {author}</b>
      <code>{date}</code>

      <button onClick={deleteTweet}>borrar</button>
    </div>
  );
};

export default Tweet;
