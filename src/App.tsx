import React from "react";

// contexts
import { AuthProvider } from "./contexts/auth";

// routes
import Routes from "./routes";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </div>
  );
}

export default App;
