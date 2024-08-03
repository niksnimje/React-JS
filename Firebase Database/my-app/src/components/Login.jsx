// src/components/Login.jsx
import React from 'react';
import { auth, provider } from '../firebase';
import { signInWithPopup } from "firebase/auth";
import { useHistory } from 'react-router-dom';

const Login = () => {
  const history = useHistory();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        history.push('/dashboard');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  );
};

export default Login;
