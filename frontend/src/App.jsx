import LandingPage from "./components/LoginComponents/LandingPage";
import { useState } from "react";
import Login from "./components/LoginComponents/Login";
import ChatAppLanding from "./components/ChatComponents/ChatAppLanding";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [newUser, setNewUser] = useState(false);
  const [landingPage, setLandingPage] = useState(true);
  const [chatAppLanding, setChatAppLanding] = useState(false);
  return (
    <div>
      {landingPage && (
        <LandingPage
          setShowLogin={setShowLogin}
          setNewUser={setNewUser}
          setLandingPage={setLandingPage}
          setChatAppLanding={setChatAppLanding}
        />
      )}
      {newUser && (
        <Login
          title={"Sign Up"}
          setShowLogin={setShowLogin}
          setNewUser={setNewUser}
          setLandingPage={setLandingPage}
          setChatAppLanding={setChatAppLanding}
          newUser={newUser}
        />
      )}
      {showLogin && (
        <Login
          title={"Login"}
          setShowLogin={setShowLogin}
          setNewUser={setNewUser}
          setLandingPage={setLandingPage}
          setChatAppLanding={setChatAppLanding}
          newUser={newUser}
        />
      )}
      {chatAppLanding && <ChatAppLanding />}
    </div>
  );
}

export default App;
