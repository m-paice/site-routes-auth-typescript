import React from "react";

import { useAuth } from "../../contexts/auth";

const SignIn: React.FC = () => {
  const { signIn } = useAuth();

  const handleSubmit = async () => {
    await signIn();
  };

  return (
    <div>
      <button onClick={handleSubmit}> SignIn </button>
    </div>
  );
};

export default SignIn;
