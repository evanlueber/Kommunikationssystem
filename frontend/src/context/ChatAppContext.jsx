import { useContext, useState, createContext } from "react";

const chatAppContextDefaultValues = {
  setShowStandard: () => {},
  setShowConnect: () => {},
  setShowChannels: () => {},
  setCurrentChannel: () => {},
  showStandard: true,
  showConnect: false,
  showChannels: false,
  currentChannel: {
    channelName: "",
    channelId: 0,
    channelJoinId: "",
  },
};

export const ChatAppContext = createContext(chatAppContextDefaultValues);

export function useChatAppContext() {
  return useContext(ChatAppContext);
}

const ChatAppProvider = ({ children }) => {
  const [showStandard, setShowStandard] = useState(true);
  const [showConnect, setShowConnect] = useState(false);
  const [showChannels, setShowChannels] = useState(false);
  const [currentChannel, setCurrentChannel] = useState({
    channelName: "",
    channelId: 0,
    channelJoinId: "",
  });

  const value = {
    showChannels,
    showConnect,
    showStandard,
    setShowChannels,
    setShowConnect,
    setShowStandard,
    currentChannel,
    setCurrentChannel,
  };

  return (
    <ChatAppContext.Provider value={value}>{children}</ChatAppContext.Provider>
  );
};

export default ChatAppProvider;
