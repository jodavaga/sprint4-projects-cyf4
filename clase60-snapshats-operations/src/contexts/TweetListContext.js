import { useState, createContext } from "react";

export const TweetListContext = createContext();

const TweetListProvider = ({ children }) => {
  const [listaTweets, setListaTweets] = useState([]);

  return (
    <TweetListContext.Provider value={{ listaTweets, setListaTweets }}>
      {children}
    </TweetListContext.Provider>
  );
};

export default TweetListProvider;
