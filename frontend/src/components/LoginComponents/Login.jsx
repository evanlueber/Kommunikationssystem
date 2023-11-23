import React from "react";
import { BiArrowBack } from "react-icons/bi";
import Button from "./Button";
import { useState } from "react";

const Login = ({ title, setLandingPage, setShowLogin, setNewUser, setChatApp, newUser, setCurrentUser }) => {
  const handleLogin = async (username, password) => {
    try {
      const response = await fetch('http://localhost:5003/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password: password }),
      }).then((res) => res.json());

  
      if (response) {
        console.log(response)
        console.log('Login successful');
        console.log('UserId:', response.user);
        setCurrentUser(response.user.username);
        setChatApp(true);
        setLandingPage(false);
        setShowLogin(false);
      } else {
        console.error('Login failed:', response.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistration = async () => {
    try {
      const response = await fetch('http://localhost:5003/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password: password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Registration successful');
        setShowLogin(true);
        setNewUser(false);
      } else {
        console.error('Registration failed:', data.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

  return (
    <div className="login-page">
      <p className="chat-app-title">{title}</p>
      <div className="login-container">
        <input
          className="login-input focus:placeholder:text-black p-1"
          type="name"
          placeholder="Username..."
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <input
          className="login-input focus:placeholder:text-black p-1"
          type="password"
          placeholder="Password..."
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <div className="buttons">
          <Button
            onClick={() => {
              setLandingPage(true);
              setShowLogin(false);
              setNewUser(false);
              setChatApp(false);
            }}
            buttonText={<BiArrowBack size={20} />}
          />
          <Button
            onClick={() => {
              {newUser ? handleRegistration() : handleLogin(username, password)}
            }}
            buttonText={ newUser ? "Sign Up" : "Login"}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
