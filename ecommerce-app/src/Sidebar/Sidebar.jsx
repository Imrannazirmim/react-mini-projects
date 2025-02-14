import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Category from "./Category/Category.jsx";
import Price from "./Price/Price.jsx";
import Colors from "./Colors/Colors.jsx";

const Sidebar = ({ handleChange }) => {
  return (
    <>
      <section className="w-[13%] h-screen absolute top-0 shadow">
        <div className="m-4 p-4">
          <h1 className={`text-5xl`}>
            <AiOutlineShoppingCart />
          </h1>
        </div>
        <div>
          <Category handleChange={handleChange} />
          <Price handleChange={handleChange} />
          <Colors handleChange={handleChange} />
        </div>
      </section>
    </>
  );
};
export default Sidebar;
