import React from "react";

const Input = ({ handleChange, value, title, name, color }) => {
  return (
    <label className="flex gap-1">
      <input type="radio" onChange={handleChange} value={value} name={name} />
      <span style={{ backgroundColor: color }}></span>
      {title}
    </label>
  );
};
export default Input;
