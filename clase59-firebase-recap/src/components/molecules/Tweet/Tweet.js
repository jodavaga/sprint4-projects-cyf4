import React from "react";
import useTweets from "../../../hooks/useTweets";

const Tweet = ({ text, author, date, id }) => {
  const { deleteTweet } = useTweets();

  const handleDelete = async (id) => {
    await deleteTweet(id);
  };

  return (
    <div>
      <h3>{text}</h3>
      <b>Author: {author}</b>
      <code>{date}</code>
      <button onClick={() => handleDelete(id)}>borrar</button>
    </div>
  );
};

export default Tweet;
