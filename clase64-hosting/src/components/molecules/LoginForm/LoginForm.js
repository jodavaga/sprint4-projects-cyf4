import React, { useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";
import useAuthentication from "../../../hooks/useAuthentication";

const LoginForm = () => {
  const { loginSocial } = useAuthentication();

  // consumimos el contexto de usuario
  const { user } = useContext(UserContext);

  return (
    <>
      {user ? (
        <p>Hola, {user.displayName}</p>
      ) : (
        <p>No podras tweetear sino te logeas primero</p>
      )}
      <button onClick={loginSocial}>Login</button>
    </>
  );
};

export default LoginForm;
