import { useEffect } from "react";
import logo from "./logo.svg";

import invertirString from "./functions/invertirString";

import "./App.css";

function App() {
  useEffect(() => {
    console.log("String invertido:", invertirString("Acamica"));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Clase 66 - Jest</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
