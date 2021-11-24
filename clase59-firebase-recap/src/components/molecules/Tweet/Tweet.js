import React from "react";
import useTweets from "../../../hooks/useTweets";

const Tweet = () => {
  const { deleteTweet } = useTweets();

  return (
    <div>
      <h3>Texto del tweet</h3>
      <b>Author del tweet</b>
      <code>fecha del tweet</code>

      <button onClick={deleteTweet}>borrar</button>
    </div>
  );
};

export default Tweet;
