import React, { useState, useEffect, useContext } from "react";
import { TweetsContext } from "../../contexts/TweetsContext";
import useTweetCollection from "../../hooks/useTweetCollection";
import Tweet from "../molecules/Tweet/Tweet";

import "./styles.css";

const ListaTweets = () => {
  const { getAllDocs } = useTweetCollection();
  const { listaTweets } = useContext(TweetsContext);

  useEffect(() => {
    // get tweet sync
    const getTweetsAsync = async () => {
      const misTweets = await getAllDocs();
    };

    getTweetsAsync();
  }, []);

  return (
    <div className="listWrapper">
      {listaTweets.length > 0
        ? listaTweets.map((element) => (
            <Tweet key={element.id} tweetData={element} />
          ))
        : "No existen tweets"}
    </div>
  );
};

export default ListaTweets;
