import React from "react";
import { BiArrowBack } from "react-icons/bi";
import Button from "./Button";
import { useState } from "react";
import api from "../../utils/api";
import { useUserContext } from "../../context/UserContext";
import { useDisplaingContext } from "../../context/DisplaingContext";

const Login = ({ title  }) => {
  const {setUser} = useUserContext()
  const {setLandingPage, setShowLogin, setNewUser, setChatApp, newUser} = useDisplaingContext()
  
  const handleLogin = async (username, password) => {
    try {
      const response = await api.login(username, password);
  
      if (response) {
        console.log(response)
        console.log('Login successful');
        console.log('UserId:', response.user);
        setUser(response.user.username);
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
      const response = await api.register(username, password)

      if (response) {
        console.log('Registration successful');
        setShowLogin(true);
        setNewUser(false);
      } else {
        console.error('Registration failed:', response.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center gap-20 text-white">
      <p className="text-6xl animate-zoomIn font-bold text-white">{title}</p>
      <div className="flex flex-col justify-center items-center gap-5 w-1/3">
        <input
          className="outline outline-white bg-transparent rounded outline-none focus:outline-white focus:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-indigo-500 focus:placeholder:text-white p-1"
          type="name"
          placeholder="Username..."
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <input
          className="outline outline-white bg-transparent rounded outline-none focus:outline-white focus:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-indigo-500 focus:placeholder:text-white p-1"
          type="password"
          placeholder="Password..."
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <div className="flex flex-row justify-center items-center">
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
