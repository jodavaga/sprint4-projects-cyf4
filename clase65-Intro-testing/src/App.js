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

  // Toolbox

  const esImpar = (num) => (num % 2 === 0 ? false : true);
  const esPar = (num) => (num % 2 === 0 ? true : false);

  const validarEsImpar = () => {
    // caso 1 (happy path)
    console.assert(
      esImpar(3) === false,
      `<Validando esIMPAR()> - El numero no es IMPAR, es par: ${3}`
    );
    // caso de uso 2
    console.assert(
      esImpar(6),
      `<Validando esIMPAR()> - El numero no es IMPAR, es par: ${6}`
    );
  };
  const validarEsPar = (num) => {
    console.assert(
      esPar(num),
      `<Validando esPAR()> El numero es IMPAR: ${num}`
    );
  };

  validarEsImpar();
  validarEsPar(1);

  return (
    <div className="App">
      <h1>Clase 65 - Intro Testing</h1>
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
