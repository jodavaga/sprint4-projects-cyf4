import React, { useContext } from "react";
import { ReactComponent as IconHeart } from "../../../assets/icons/iconHeart.svg";
import { UserContext } from "../../../contexts/UserContext";
import useTweetCollection from "../../../hooks/useTweetCollection";
import "./styles.css";

const Tweet = ({ tweetData }) => {
  const { deleteTweet, addLikes } = useTweetCollection();
  const { tweet: text, author, id, uid, likes } = tweetData;

  const { user } = useContext(UserContext);

  const handleAddLikes = async (id) => {
    await addLikes(id);
  };

  return (
    <div className="tweetWrapper">
      <h2>{text}</h2>
      <div>
        <span>
          <b>Author:</b> {author}
        </span>
        <div className="tweetFooter">
          {uid === user?.uid && (
            <button onClick={() => deleteTweet(id)}>borrar</button>
          )}
          <div className="likesWrapper" onClick={() => handleAddLikes(id)}>
            <IconHeart className="icon" /> {likes && `+${likes}`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
