import { useContext } from "react";
import { signInWithPopup } from "firebase/auth";
import { UserContext } from "../contexts/UserContext";
import { auth, googleProvider } from "../firebase/config";

const useAuthentication = () => {
  const { setUser } = useContext(UserContext);

  const loginSocial = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log(
        "🚀 ~ file: useAuthentication.js ~ line 13 ~ loginSocial ~ user",
        user
      );

      setUser(user);
    } catch (e) {
      console.log(
        "🚀 ~ file: useAuthentication.js ~ line 10 ~ loginSocial ~ e",
        e.message
      );
    }
  };

  return { loginSocial };
};

export default useAuthentication;
