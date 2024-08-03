// src/components/PrivateRoute.jsx
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [user] = useAuthState(auth);

  return (
    <Route
      {...rest}
      render={(props) =>
        user ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
