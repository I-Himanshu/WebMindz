// components/SignIn.tsx

import React from 'react';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import {auth} from "../firebase/config"
const SignIn = () => {
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  return (
    <div>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  );
};

export default SignIn;
