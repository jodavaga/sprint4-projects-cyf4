import { useState, useEffect } from "react";

// components
import TweetForm from "./components/molecules/TweetForm/TweetForm";
import ListaTweets from "./components/organisms/ListaTweets";

// styles
import "./App.css";
import useTweetCollection from "./hooks/useTweetCollection";
import useAuthentication from "./hooks/useAuthentication";

const initialFormState = {
  tweet: "",
  author: "",
};

function App() {
  const [formState, setFormState] = useState(initialFormState);

  const { loginSocial } = useAuthentication();

  return (
    <div className="App">
      <h1>Clase 62 - Authenticated Tweets</h1>
      <p>No podras tweetear sino te logeas primero</p>
      <button onClick={loginSocial}>Login</button>
      <br />
      <hr />
      <TweetForm
        formState={formState}
        setFormState={setFormState}
        initialState={initialFormState}
      />
      <hr />
      <ListaTweets />
    </div>
  );
}

export default App;
