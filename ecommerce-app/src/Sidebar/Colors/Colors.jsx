import React from "react";
import Input from "../../components/Input.jsx";

const Colors = ({ handleChange }) => {
  return (
    <div className="flex flex-col font-bold text-gray-600 gap-2 m-2 p-2 ">
      <h2 className="text-xl text-gray-700">Colors</h2>
      <div className="flex flex-col gap-2">
        <label className="flex gap-3">
          <input type="radio" onChange={handleChange} value="" name="text" />
          <span>All</span>
        </label>
        <Input
          handleChange={handleChange}
          value="black"
          title="Black"
          name="text"
          color="black"
        />
        <Input
          handleChange={handleChange}
          value="blue"
          title="Blue"
          name="text"
          color="blue"
        />
        <Input
          handleChange={handleChange}
          value="red"
          title="Red"
          name="text"
          color="red"
        />
        <Input
          handleChange={handleChange}
          value="green"
          title="Green"
          name="text"
          color="green"
        />
        <Input
          handleChange={handleChange}
          value="white"
          title="White"
          name="text"
          color="white"
        />
      </div>
    </div>
  );
};
export default Colors;
