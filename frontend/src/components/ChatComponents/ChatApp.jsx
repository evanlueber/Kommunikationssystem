import React from "react";
import RightSide from "./RightSide/MainComponent";
import LeftSide from "./LeftSide/MainComponent";

const ChatApp = ({ setNewUser, setShowLogin, setChatApp, setLandingPage }) => {
  const [showStandard, setShowStandard] = React.useState(true);
  const [showConnect, setShowConnect] = React.useState(false);
  const [showChannels, setShowChannels] = React.useState(false);

  return (
    <div className="flex flex-row w-screen h-screen">
      <LeftSide
        setShowChannels={setShowChannels}
        setShowConnect={setShowConnect}
        setShowStandard={setShowStandard}
        showChannels={showChannels}
        setNewUser={setNewUser}
        setShowLogin={setShowLogin}
        setLandingPage={setLandingPage}
        setChatApp={setChatApp}
      />
      <RightSide />
    </div>
  );
};

export default ChatApp;
