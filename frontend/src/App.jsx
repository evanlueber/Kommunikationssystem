import LandingPage from "./LandingPage";
import { useState } from "react";
import Registration from "./components/LoginComponents/Registration";
import Login from "./components/LoginComponents/Login";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [newUser, setNewUser] = useState(false);
  const [landingPage, setLandingPage] = useState(true);
  return (
    <div>
      {landingPage && (
        <LandingPage
          setShowLogin={setShowLogin}
          setNewUser={setNewUser}
          setLandingPage={setLandingPage}
        />
      )}
      {newUser && (
        <Registration
          setShowLogin={setShowLogin}
          setNewUser={setNewUser}
          setLandingPage={setLandingPage}
        />
      )}
      {showLogin && (
        <Login
          setShowLogin={setShowLogin}
          setNewUser={setNewUser}
          setLandingPage={setLandingPage}
        />
      )}
    </div>
  );
}

export default App;
