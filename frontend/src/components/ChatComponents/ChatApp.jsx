import React from "react";
import RightSide from "./RightSide/MainComponent";
import LeftSide from "./LeftSide/MainComponent";

const ChatApp = ({ username }) => {
  const [showStandard, setShowStandard] = React.useState(true);
  const [showConnect, setShowConnect] = React.useState(false);
  const [showChannels, setShowChannels] = React.useState(false);

  return (
    <div className="flex flex-row w-screen h-screen">
      <LeftSide
        username={username}
        setShowChannels={setShowChannels}
        setShowConnect={setShowConnect}
        setShowStandard={setShowStandard}
      />
      <RightSide />
    </div>
  );
};

export default ChatApp;
