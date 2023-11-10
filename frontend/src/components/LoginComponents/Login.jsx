import React from "react";
import { BiArrowBack } from "react-icons/bi";
import Button from "./Button";

const Login = ({ title, setLandingPage, setShowLogin, setNewUser, setChatAppLanding, newUser }) => {
  return (
    <div className="login-page">
      <p className="chat-app-title">{title}</p>
      <div className="login-container">
        <input
          className="login-input focus:placeholder:text-black p-1"
          type="name"
          placeholder="Username..."
        />
        <input
          className="login-input focus:placeholder:text-black p-1"
          type="password"
          placeholder="Password..."
        />
        <div className="buttons">
          <Button
            onClick={() => {
              setLandingPage(true);
              setShowLogin(false);
              setNewUser(false);
              setChatAppLanding(false);
            }}
            buttonText={<BiArrowBack size={20} />}
          />
          <Button
            onClick={() => {
              setLandingPage(false);
              setShowLogin(false);
              setNewUser(false);
              setChatAppLanding(true);
            }}
            buttonText={ newUser ? "Sign Up" : "Login"}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
