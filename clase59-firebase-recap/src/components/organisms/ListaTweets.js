import React, { useEffect, useState } from "react";
import useTweets from "../../hooks/useTweets";
import Tweet from "../molecules/Tweet/Tweet";

const ListaTweets = () => {
  const [listaTweets, setListaTweets] = useState([]);
  const { getTweets } = useTweets();

  useEffect(() => {
    getTweets(setListaTweets);
  }, []);

  return (
    <div>
      {listaTweets &&
        listaTweets.map((element) => (
          <Tweet
            key={element.id}
            text={element.tweet}
            author={element.author}
          />
        ))}
    </div>
  );
};

export default ListaTweets;
