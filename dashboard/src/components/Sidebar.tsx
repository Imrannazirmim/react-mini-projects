import { useState } from "react";

const Sidebar = () => {
  return (
    <div className="w-38 fixed h-screen border border-[#242424] p-4 flex flex-col items-center space-y-8 bg-gray-900">
      <h2 className="text-gray-300 font-semibold text-2xl text-center mt-10 ">
        Dashboard
      </h2>
      <section className="flex flex-col gap-8 text-3xl mt-[10rem]">
        <div className="border p-4 rounded-full border-gray-600 hover:bg-gray-800">
          🗂️
        </div>
        <div className="border p-4 rounded-full border-gray-600 hover:bg-gray-800">
          💡
        </div>
        <div className="border p-4 rounded-full border-gray-600 hover:bg-gray-800">
          ⚙️
        </div>
      </section>
    </div>
  );
};

export default Sidebar;
