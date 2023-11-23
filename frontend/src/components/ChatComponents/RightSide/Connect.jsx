import React from "react";
import api from "../../../utils/api";
import { useState } from "react";

const Connect = () => {

  const [createChannel, setCreateChannel] = useState("");
  const [joinChannel, setJoinChannel] = useState("");

  const handleJoinChannel = async () => {
    try {
      const response = await api.joinChannel(joinChannel);
      if (response.success) {
        console.log("Joining channel successful");
        alert(response.message)
        setJoinChannel("");
      } else {
        console.error("Joining channel failed:", response.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleCreateChannel = async () => {
    try {
      const response = await api.createChannel(createChannel);
      if (response.success) {
        console.log("Creating channel successful");
        alert(response.message)
        setCreateChannel("");
      } else {
        console.error("Creating channel failed:", response.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex flex-col gap-5 justify-center items-center text-white text-3xl flex-grow ">
      <div className="w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-indigo-500 p-10 rounded flex flex-row gap-16">
        <input
          type="text"
          className="outline outline-2 outline-white bg-[#252526] placeholder:text-2xl text-white p-2 w-96 focus:outline-purple-900 focus:outline-4 rounded"
          placeholder="Channelname"
          onChange={(e) => setCreateChannel(e.target.value)}
          value={createChannel}
        />
        <div
          className="w-1/2 text-center font-bold rounded-lg text-2xl border-2 bg-black bg-opacity-50 border-white p-8 transition-transform duration-300 scale-100 hover:scale-110 hover:shadow-[0,0,0.35]"
          onClick={handleCreateChannel}
        >
          Create Channel
        </div>
      </div>
      <div className="w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-indigo-500 p-10 rounded flex flex-row gap-16">
        <input
          type="text"
          className="outline outline-2 outline-white bg-[#252526] placeholder:text-2xl text-white p-2 w-96 focus:outline-purple-900 focus:outline-4 rounded"
          placeholder="Join ID"
          onChange={(e) => setJoinChannel(e.target.value)}
          value={joinChannel}
        />
        <div
          className="w-1/2 text-center font-bold rounded-lg text-2xl border-2 bg-black bg-opacity-50 border-white p-8 transition-transform duration-300 scale-100 hover:scale-110 hover:shadow-[0,0,0.35]"
          onClick={handleJoinChannel}
        >
          Join Channel
        </div>
      </div>
    </div>
  );
};

export default Connect;
