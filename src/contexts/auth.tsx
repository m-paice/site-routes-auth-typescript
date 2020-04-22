import React, { createContext, useState, useEffect, useContext } from "react";

import { signIn } from "../services/auth";
import api from "../services/api";

import history from "../routes/history";

interface User {
  name: string;
  email: string;
}

interface AuthContextData {
  signed: boolean;
  user: User | null;
  signIn(): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storagedUser = localStorage.getItem("user");
    const storagedToken = localStorage.getItem("token");

    if (storagedUser && storagedToken) {
      console.log('aqui')
      api.defaults.headers["Authorization"] = `Bearer ${storagedToken}`;

      setUser(JSON.parse(storagedUser));
    }
  }, []);

  const handleSignIn = async () => {
    const response = await signIn();

    const { user, token } = response;

    setUser(user);

    api.defaults.headers["Authorization"] = `Bearer ${token}`;

    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);

    history.push("/home");
  };

  const handleSignOut = () => {
    localStorage.clear();
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        signIn: handleSignIn,
        signOut: handleSignOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
};
