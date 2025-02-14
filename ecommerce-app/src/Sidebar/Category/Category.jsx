import React from "react";
import Input from "../../components/Input.jsx";

const Category = ({ handleChange }) => {
  return (
    <div className="flex flex-col font-bold text-gray-600 gap-2 m-2 p-2 ">
      <h2 className="text-xl text-gray-700">Category List</h2>
      <div className="flex flex-col gap-2">
        <label className="flex gap-1">
          <input type="radio" onChange={handleChange} value="" name="test" />
          <span></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="sneakers"
          title="Sneakers"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="flats"
          title="Flats"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="sandals"
          title="Sandals"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="heels"
          title="Heels"
          name="test"
        />
      </div>
    </div>
  );
};
export default Category;
