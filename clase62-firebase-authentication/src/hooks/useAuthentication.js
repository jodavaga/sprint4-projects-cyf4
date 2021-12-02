import { useState } from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase/config";

function useAuthentication() {
  const [user, setUser] = useState();

  const loginSocial = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(
          "🚀 ~ file: useAuthentication.js ~ line 8 ~ .then ~ result",
          result
        );
        // The signed-in user info.
        const user = result.user;
        console.log(
          "🚀 ~ file: useAuthentication.js ~ line 15 ~ .then ~ user",
          user
        );

        // actualizamos usuario
        setUser(user);
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorMessage = error.message;
        console.log(
          "🚀 ~ file: useAuthentication.js ~ line 23 ~ loginWithGoogle ~ errorMessage",
          errorMessage
        );
      });
  };

  return { user, loginSocial };
}

export default useAuthentication;
