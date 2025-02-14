import React from "react";

const Button = ({ onClickHandler, value, title }) => {
  return (
    <button
      onClick={onClickHandler}
      value={value}
      className="bg-gray-500 hover:bg-slate-600 px-4 py-2 rounded text-gray-100"
    >
      {title}
    </button>
  );
};
export default Button;
