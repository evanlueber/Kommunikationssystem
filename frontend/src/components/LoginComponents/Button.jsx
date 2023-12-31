import React from "react";
import { useState } from "react";

const Button = ({ onClick, buttonText }) => {
  const [buttonStyle, setButtonStyle] = useState({
    borderRadius: "0.5rem",
    margin: "1rem",
    transform: "scale(1)",
    transition: "transform 0.35s",
    color: "white",
    backgroundColor: "#3498db",
  });

  const handleHover = () => {
    setButtonStyle({
      ...buttonStyle,
      transform: "scale(1.15)",
      boxShadow: "0 0 0.35rem rgba(0, 0, 0, 0.5)",
    });
  };

  const handleLeave = () => {
    setButtonStyle({
      ...buttonStyle,
      transform: "scale(1)",
      boxShadow: "none",
    });
  };

  return (
    <div>
      <div
        style={buttonStyle}
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
        className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-indigo-500 w-24 flex items-center justify-center h-10"
        onClick={onClick}
      >
        {buttonText}
      </div>
    </div>
  );
};

export default Button;
