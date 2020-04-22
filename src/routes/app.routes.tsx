import React from "react";

import { Route } from "react-router-dom";

// pages
import Home from "../pages/Home";

const App: React.FC = () => {
  return (
    <>
      <Route path="/home" component={Home} />
    </>
  );
};

export default App;
