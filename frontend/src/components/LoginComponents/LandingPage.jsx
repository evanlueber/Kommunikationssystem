import React from "react";

const LandingPage = ({ setLandingPage, setShowLogin, setNewUser }) => {

  return (
    <div className="text-white flex flex-col items-center justify-center text-center gap-20 h-screen w-screen;">
      <p className="text-6xl animate-zoomIn font-bold text-white">Chat App</p>
      <div className="flex flex-col justify-center text-center w-1/3 gap-5">
        <div
          className="font-bold bg-gradient-to-r from-indigo-300 to-purple-400 rounded-lg text-2xl p-8 transition-transform duration-300 scale-100 hover:scale-110 hover:shadow-[0,0,0.35)]"
          onClick={() => {
            setNewUser(true);
            setLandingPage(false);
            setShowLogin(false);
          }}
        >
          New User
        </div>
        <div
          className="font-bold bg-gradient-to-r from-indigo-300 to-purple-400 rounded-lg text-2xl p-8 transition-transform duration-300 scale-100 hover:scale-110 hover:shadow-[0,0,0.35]"
          onClick={() => {
            setNewUser(false);
            setLandingPage(false);
            setShowLogin(true);
          }}
        >
          Login
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
