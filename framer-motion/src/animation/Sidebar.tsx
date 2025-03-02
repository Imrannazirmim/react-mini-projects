import { useState } from "react";
import { motion } from "framer-motion";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full h-screen flex">
      {isOpen && (
        <motion.div
          className={`w-[15rem] h-screen bg-gray-800 text-white p-3 ${isOpen ? "" : "-translate-x-full"}`}
          initial={{ x: "-100%" }}
          animate={{ x: isOpen ? "0%" : "-100%" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl text-center p-2">Sidebar</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </motion.div>
      )}
      <section className="w-[80%] h-screen flex justify-center items-center ">
        <button
          className="px-4 py-2 bg-blue-500 rounded"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "Close" : "Open"}
        </button>
      </section>
    </div>
  );
};
export default Sidebar;
