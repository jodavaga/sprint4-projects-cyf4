import { useState } from "react";

// components
import TweetForm from "./components/molecules/TweetForm/TweetForm";
import ListaTweets from "./components/organisms/ListaTweets";

// styles
import "./App.css";
import useAuthentication from "./hooks/useAuthentication";
import LoginForm from "./components/molecules/LoginForm/LoginForm";

const initialFormState = {
  tweet: "",
};

function App() {
  const [formState, setFormState] = useState(initialFormState);

  const { logout } = useAuthentication();

  return (
    <div className="App">
      <h1>Clase 64 - Firebase Deploy</h1>
      <LoginForm />
      <br />
      <hr />
      <TweetForm
        formState={formState}
        setFormState={setFormState}
        initialState={initialFormState}
      />
      <hr />
      <ListaTweets />

      <hr />
      <button onClick={logout}>logout</button>
    </div>
  );
}

export default App;
