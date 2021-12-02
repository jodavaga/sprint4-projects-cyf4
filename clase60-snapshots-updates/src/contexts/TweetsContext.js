import { useState, createContext } from "react";

export const TweetsContext = createContext();

const TweetsProvider = ({ children }) => {
  const [listaTweets, setListaTweets] = useState([]);

  return (
    <TweetsContext.Provider value={{ listaTweets, setListaTweets }}>
      {children}
    </TweetsContext.Provider>
  );
};

export default TweetsProvider;
