import React from "react";

import { Router } from "react-router";
import { Switch, Redirect } from "react-router-dom";

import history from "./history";

import { useAuth } from "../contexts/auth";

import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";

const Routes: React.FC = () => {
  const { signed } = useAuth();

  console.log(signed);

  return (
    <Router history={history}>
      <Switch>
        {signed ? (
          <>
            <AppRoutes />
            <Redirect to="/home" />
          </>
        ) : (
          <>
            <AuthRoutes />
            <Redirect to="/" />
          </>
        )}
      </Switch>
    </Router>
  );
};

export default Routes;
