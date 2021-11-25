import React, { useContext } from "react";
import { TweetListContext } from "../../contexts/TweetListContext";
import Tweet from "../molecules/Tweet/Tweet";

import "./styles.css";

const ListaTweets = () => {
  const { listaTweets } = useContext(TweetListContext);

  return (
    <div className="listWrapper">
      {listaTweets.length > 0
        ? listaTweets.map((element) => (
            <Tweet
              key={element.id}
              id={element.id}
              text={element.tweet}
              author={element.author}
              date={element.date}
            />
          ))
        : "No existen tweets"}
    </div>
  );
};

export default ListaTweets;
