import logo from "./logo.svg";
import useAuthentication from "./hooks/useAuthentication";
import "./App.css";

function App() {
  const { loginSocial, user } = useAuthentication();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Clase 62 - Firebase Authentication</p>
        <button onClick={loginSocial}>Login</button>
        {user && <h3>Hola, {user.displayName}</h3>}
      </header>
    </div>
  );
}

export default App;
