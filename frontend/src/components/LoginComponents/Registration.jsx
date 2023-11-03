import React from "react";
import BackButton from "../BackButton";

const Registration = ({ setLandingPage, setShowLogin, setNewUser }) => {
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

export default Registration;
