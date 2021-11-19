import React, { useState } from "react";
import { addDoc } from "firebase/firestore";
import { tweetsCollectionRef } from "../../firebase/config";

export const TweetInput = () => {
  const [tweetText, setTweetText] = useState("");

  // create Tweet on DB
  const createTweetOnDB = async (text) => {
    const tweetRef = await addDoc(tweetsCollectionRef, {
      text,
      date: new Date(),
    });

    console.log(tweetRef.id);
  };

  // Handle submit
  const handleCreateTweet = (e) => {
    e.preventDefault();
    console.log("Event:", tweetText);

    // crear el tweet en la base de datos
    createTweetOnDB(tweetText);

    // reset el input
    setTweetText("");
  };

  return (
    <form onSubmit={handleCreateTweet}>
      <input
        placeholder="agrega un tweet"
        name="tweet"
        value={tweetText}
        onChange={(e) => setTweetText(e.target.value)}
      />
      <button type="submit">Crear tweet</button>
    </form>
  );
};

export default TweetInput;
