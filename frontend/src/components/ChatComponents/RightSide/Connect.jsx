import React from "react";
import { useState } from "react";

const Connect = () => {
  return (
    <div className="flex flex-col gap-5 justify-center items-center text-white text-3xl flex-grow ">
      <div className="w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-indigo-500 p-10 rounded flex flex-row gap-16">
        <input
          type="text"
          className="outline outline-2 outline-white bg-[#252526] placeholder:text-2xl text-white p-2 w-96 focus:outline-purple-900 focus:outline-4 rounded"
          placeholder="Channelname"
        />
        <div className="w-1/2 text-center font-bold rounded-lg text-2xl border-2 bg-black bg-opacity-50 border-white p-8 transition-transform duration-300 scale-100 hover:scale-110 hover:shadow-[0,0,0.35]">
          Create Channel
        </div>
      </div>
      <div className="w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-indigo-500 p-10 rounded flex flex-row gap-16">
        <input
          type="text"
          className="outline outline-2 outline-white bg-[#252526] placeholder:text-2xl text-white p-2 w-96 focus:outline-purple-900 focus:outline-4 rounded"
          placeholder="Join ID"
        />
        <div className="w-1/2 text-center font-bold rounded-lg text-2xl border-2 bg-black bg-opacity-50 border-white p-8 transition-transform duration-300 scale-100 hover:scale-110 hover:shadow-[0,0,0.35]">
          Join Channel
        </div>
      </div>
    </div>
  );
};

export default Connect;
