import LandingPage from "./LandingPage";
import { useState } from "react";
import Registration from "./components/LoginComponents/Registration";

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
        <Registration
          setShowLogin={setShowLogin}
          setNewUser={setNewUser}
          setLandingPage={setLandingPage}
        />
      )}
    </div>
  );
}

export default App;
