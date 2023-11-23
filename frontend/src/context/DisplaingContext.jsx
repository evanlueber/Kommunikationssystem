import { useContext, useState, createContext } from "react";

const displaingContextDefaultValues = {
    setShowLogin: () => {},
    setNewUser: () => {},
    setLandingPage: () => {},
    setChatApp: () => {},
    showLogin: false,
    newUser: false,
    landingPage: true,
    chatApp: false,
};

export const DisplaingContext = createContext(displaingContextDefaultValues);

export function useDisplaingContext() {
    return useContext(DisplaingContext);
}

const DisplaingProvider = ({ children }) => {
    const [showLogin, setShowLogin] = useState(false);
    const [newUser, setNewUser] = useState(false);
    const [landingPage, setLandingPage] = useState(true);
    const [chatApp, setChatApp] = useState(false);

  const value = {
    showLogin,
    setShowLogin,
    newUser,
    setNewUser,
    landingPage,
    setLandingPage,
    chatApp,
    setChatApp
  }

    return (
        <DisplaingContext.Provider value={value}>
            {children}
        </DisplaingContext.Provider>
    );
}

export default DisplaingProvider;