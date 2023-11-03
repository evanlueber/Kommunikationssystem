import React from "react";
import Button from "../Button";
import { BiArrowBack } from "react-icons/bi";

const Registration = ({ setLandingPage, setShowLogin, setNewUser }) => {
  return (
    <div>
      <Button
        setNewUser={setNewUser}
        setShowLogin={setShowLogin}
        setLandingPage={setLandingPage}
        buttonText= {<BiArrowBack size={20}/>}
      />
    </div>
  );
};

export default Registration;
