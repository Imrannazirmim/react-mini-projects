import React from "react";
import Input from "../../components/Input.jsx";

const Price = ({ handleChange }) => {
  return (
    <div className="flex flex-col font-bold text-gray-600 gap-2 m-2 p-2 ">
      <div>
        <h2 className="text-2xl text-gray-700">Price</h2>
      </div>
      <label className="flex gap-1">
        <input type="radio" onChange={handleChange} value="" name="test" />
        All
      </label>
      <Input
        handleChange={handleChange}
        value={50}
        title="$0-$50"
        name="test"
      />
      <Input
        handleChange={handleChange}
        value={100}
        title="$50-$100"
        name="test"
      />
      <Input
        handleChange={handleChange}
        value={150}
        title="$100-$150"
        name="test"
      />
      <Input
        handleChange={handleChange}
        value={200}
        title="Over $150"
        name="test"
      />
    </div>
  );
};
export default Price;
