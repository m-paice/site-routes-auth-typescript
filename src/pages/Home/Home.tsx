import React from "react";

import { useAuth } from "../../contexts/auth";

const Home: React.FC = () => {
  const { signOut } = useAuth();

  const handleSignOut = () => signOut();

  return (
    <div>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};

export default Home;
