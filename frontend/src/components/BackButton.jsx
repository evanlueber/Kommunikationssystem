import React from "react";
import { BiArrowBack } from "react-icons/bi";

const BackButton = ({setLandingPage, setShowLogin, setNewUser}) => {
  return (
    <div>
      <div className="back-button" onClick={() => {
        setNewUser(false)
        setLandingPage(true)
        setShowLogin(false)
      }}>
        <BiArrowBack size={20} />
      </div>
    </div>
  );
};

export default BackButton;
