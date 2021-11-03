import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

export const PrivateRoute = ({ comp: Component, ...rest }) => {
  const isLogged = useSelector((state) => state.auth.isLoggedIn);

  return (
    <Route
      {...rest}
      render={(props) => {
        return !isLogged ? <Redirect to="/" /> : <Component {...props} />;
      }}
    />
  );
};
