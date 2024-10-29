import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";
import {
  signInWithPopup,
  GoogleAuthProvider,
  EmailAuthProvider,
} from "firebase/auth";

function SignIn() {
  let [user] = useAuthState(auth);

  const logInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

    const logInWithEmail = () => {
    const provider = new EmailAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <form>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button onClick={logInWithEmail}>Login Email</button>
      </form>
      <button onClick={logInWithGoogle}>Login Google</button>SignIn
    </div>
  );
}

export default SignIn;
