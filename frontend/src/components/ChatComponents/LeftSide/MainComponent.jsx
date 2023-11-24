import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { BiLogOut } from "react-icons/bi";
import Channels from "./Channels";
import api from "../../../utils/api";
import { useUserContext } from "../../../context/UserContext";
import { useChatAppContext } from "../../../context/ChatAppContext";
import { useDisplaingContext } from "../../../context/DisplaingContext";

const MainComponent = () => {
  const { user } = useUserContext();
  const {
    setShowChannels,
    setShowConnect,
    setShowStandard,
    showChannels,
    showConnect,
  } = useChatAppContext();
  const { setLandingPage, setChatApp } = useDisplaingContext();

  const handleLogout = async () => {
    try {
      const response = await api.logout();

      if (response) {
        console.log("Logout successful");
        setLandingPage(true);
        setChatApp(false);
      } else {
        console.error("Logout failed:", response.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex flex-col w-1/4 h-screen ">
      <div className="text-center p-4 border-b border-b-white border-r border-r-white text-white">
        <p className="text-4xl">{user.username}</p>
      </div>
      <div className="flex flex-row h-screen">
        <div className={" flex flex-col " + (showConnect ? "w-full" : "w-1/2")}>
          <div className="flex flex-col text-xl p-5 items-start gap-5 border-r border-r-white text-white ">
            <button
              className="flex flex-row"
              onClick={() => {
                setShowChannels(!showChannels);
                setShowConnect(false);
                setShowStandard(false);
              }}
            >
              Channels{" "}
              <IoIosArrowForward
                className={
                  "mt-1.5 ml-1 transition-transform" +
                  (showChannels ? " rotate-180" : "")
                }
              />
            </button>
            <button
              className="flex flex-row"
              onClick={() => {
                setShowChannels(false);
                setShowConnect(!showConnect);
                setShowStandard(false);
              }}
            >
              Connect{" "}
              <IoIosArrowForward
                className={
                  "mt-1.5 ml-1 transition-transform" +
                  (showConnect ? " rotate-180" : "")
                }
              />
            </button>
          </div>
          <div className="flex flex-col text-xl p-5 items-start justify-end gap-5 border-r border-r-white text-white flex-grow ">
            <button className="flex flex-row" onClick={handleLogout}>
              <BiLogOut className="mt-1 mr-1" /> Logout
            </button>
          </div>
        </div>
        {!showConnect && (
          <div
            className={
              " transition-transform origin-left w-1/2 border-r border-r-white" +
              (showChannels ? " scale-x-10" : " scale-x-0")
            }
          >
            <Channels />
          </div>
        )}
      </div>
    </div>
  );
};

export default MainComponent;
