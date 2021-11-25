import React, { useEffect, useContext } from "react";
import { TweetListContext } from "../../contexts/TweetListContext";
import useTweets from "../../hooks/useTweets";
import Tweet from "../molecules/Tweet/Tweet";

import "./styles.css";

const ListaTweets = () => {
  const { listaTweets } = useContext(TweetListContext);

  const { getTweets } = useTweets();

  useEffect(() => {
    const getAsyncTweets = async () => await getTweets();

    getAsyncTweets();
  }, []);

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
