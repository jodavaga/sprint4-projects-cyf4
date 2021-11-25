import React from "react";
import useTweets from "../../../hooks/useTweets";
// to display svg
import { ReactComponent as IconHeart } from "../../../assets/icons/heart.svg";

import "./styles.css";

const Tweet = ({ tweetData: { tweet: text, author, id, likes } }) => {
  const { deleteTweet, addLikes } = useTweets();

  const handleDelete = async (id) => {
    await deleteTweet(id);
  };

  const handleAddLike = async (id) => {
    await addLikes(id);
  };

  return (
    <div className="tweetWrapper">
      <h2>{text}</h2>
      <div className="footer">
        <span>
          <b>Author:</b> {author}
        </span>
        <div className="footerActions">
          <button onClick={() => handleDelete(id)}>borrar</button>
          <IconHeart className="icon" onClick={() => handleAddLike(id)} />
          {likes && `+${likes}`}
        </div>
      </div>
    </div>
  );
};

export default Tweet;
