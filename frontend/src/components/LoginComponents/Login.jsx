import React from "react";
import { BiArrowBack } from "react-icons/bi";
import Button from "../Button";

const Login = ({ setLandingPage, setShowLogin, setNewUser }) => {
  return (
    <div>
      <Button
        setNewUser={setNewUser}
        setShowLogin={setShowLogin}
        setLandingPage={setLandingPage}
        buttonText={<BiArrowBack size={20} />}
      />
    </div>
  );
};

export default Login;
