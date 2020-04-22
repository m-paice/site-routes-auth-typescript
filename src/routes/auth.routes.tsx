import React from "react";

import { Router } from "react-router";
import { Route, Switch, Redirect } from "react-router-dom";

// context
import { useAuth } from "../contexts/auth";

// history
import history from "./history";

// pages
import SignIn from "../pages/SignIn";

const AuthRoutes: React.FC = () => {
  return (
    <>
      <Route exact path="/" component={SignIn} />
    </>
  );
};

export default AuthRoutes;
