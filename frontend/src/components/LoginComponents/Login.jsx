import React from "react";

const Login = ({ setLandingPage, setShowLogin, setNewUser }) => {
  return (
    <div>
      <BackButton
        size={150}
        setNewUser={setNewUser}
        setShowLogin={setShowLogin}
        setLandingPage={setLandingPage}
      />
    </div>
  );
};

export default Login;
