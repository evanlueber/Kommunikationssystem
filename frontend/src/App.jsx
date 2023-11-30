import LandingPage from "./components/LoginComponents/LandingPage";
import Login from "./components/LoginComponents/Login";
import ChatApp from "./components/ChatComponents/ChatApp";
import { useDisplaingContext } from "./context/DisplaingContext";

function App() {
  const { landingPage, chatApp, newUser, showLogin } = useDisplaingContext();

  return (
    <div>
      {landingPage && (
        <LandingPage />
      )}
      {newUser && (
        <Login
          title={"Sign Up"}
        />
      )}
      {showLogin && (
        <Login
          title={"Login"}
        />
      )}
      {chatApp && (
        <ChatApp
        />
      )}
    </div>
  );
}

export default App;
