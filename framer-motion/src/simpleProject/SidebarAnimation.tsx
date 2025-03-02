import { motion } from "framer-motion";
import { useState } from "react";

const menuVariants = {
  open: { x: 0 },
  close: { x: "-100%" },
};

const SidebarAnimation = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <motion.div
        variants={menuVariants}
        animate={open ? "open" : "close"}
        transition={{
          duration: 0.4,
        }}
        className="w-32 fixed h-screen bg-blue-400 text-white "
      >
        <ul>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
        </ul>
      </motion.div>
      <div className="flex items-center justify-center ">
        <button
          onClick={() => setOpen(!open)}
          type="button"
          className="px-4 py-2 rounded bg-teal-500"
        >
          Toggle Button
        </button>
      </div>
    </div>
  );
};

export default SidebarAnimation;
