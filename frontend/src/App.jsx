import LandingPage from "./components/LoginComponents/LandingPage";
import { useState } from "react";
import Login from "./components/LoginComponents/Login";
import ChatApp from "./components/ChatComponents/ChatApp";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [newUser, setNewUser] = useState(false);
  const [landingPage, setLandingPage] = useState(true);
  const [chatApp, setChatApp] = useState(false);
  return (
    <div>
      {landingPage && (
        <LandingPage
          setShowLogin={setShowLogin}
          setNewUser={setNewUser}
          setLandingPage={setLandingPage}
          setChatApp={setChatApp}
        />
      )}
      {newUser && (
        <Login
          title={"Sign Up"}
          setShowLogin={setShowLogin}
          setNewUser={setNewUser}
          setLandingPage={setLandingPage}
          setChatApp={setChatApp}
          newUser={newUser}
        />
      )}
      {showLogin && (
        <Login
          title={"Login"}
          setShowLogin={setShowLogin}
          setNewUser={setNewUser}
          setLandingPage={setLandingPage}
          setChatApp={setChatApp}
          newUser={newUser}
        />
      )}
    </div>
  );
}

export default App;
