import LandingPage from "./components/LoginComponents/LandingPage";
import { useState } from "react";
import Login from "./components/LoginComponents/Login";
import ChatApp from "./components/ChatComponents/ChatApp";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [newUser, setNewUser] = useState(false);
  const [landingPage, setLandingPage] = useState(true);
  const [chatApp, setChatApp] = useState(false);
  const [currentUser, setCurrentUser] = useState("");
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
          setCurrentUser={setCurrentUser}
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
          setCurrentUser={setCurrentUser}
        />
      )}
      {chatApp && (
        <ChatApp
          setLandingPage={setLandingPage}
          setChatApp={setChatApp}
          username={currentUser}
          setNewUser={setNewUser}
          setShowLogin={setShowLogin}
        />
      )}
    </div>
  );
}

export default App;
