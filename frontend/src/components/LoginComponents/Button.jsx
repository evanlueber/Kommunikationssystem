import React from "react";

const Button = ({onClick, buttonText}) => {
  return (
    <div>
      <div className="button" onClick={onClick}>
        {buttonText}
      </div>
    </div>
  );
};

export default Button;
