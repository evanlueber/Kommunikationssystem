import React from "react";

const Button = ({setLandingPage, setShowLogin, setNewUser, buttonText}) => {
  return (
    <div>
      <div className="back-button" onClick={() => {
        setNewUser(false)
        setLandingPage(true)
        setShowLogin(false)
      }}>
        {buttonText}
      </div>
    </div>
  );
};

export default Button;
