import { useState } from "react";

// components
import TweetForm from "./components/molecules/TweetForm/TweetForm";
import ListaTweets from "./components/organisms/ListaTweets";

// styles
import "./App.css";

const initialFormState = {
  tweet: "",
  author: "",
};

function App() {
  const [formState, setFormState] = useState(initialFormState);

  return (
    <div className="App">
      <h1>Clase 59 - Recap firebase</h1>

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
