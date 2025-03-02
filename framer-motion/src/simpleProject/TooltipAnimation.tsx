import { motion } from "framer-motion";
import { useState } from "react";

const showVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};
const TooltipAnimation = () => {
  const [isShow, setIsShow] = useState(false);
  return (
    <div className=" w-full h-screen flex flex-col items-center justify-center">
      <motion.div
        variants={showVariants}
        initial="hidden"
        animate={isShow ? "visible" : "hidden"}
        transition={{
          duration: 0.8,
        }}
        className="px-4 py-2 rounded bg-gray-700 mb-1"
      >
        <h2>Show Tooltip Content</h2>
      </motion.div>

      <button
        onMouseEnter={() => setIsShow(true)}
        onMouseOut={() => setIsShow(false)}
        type="button"
        className="py-2 px-4 bg-teal-500"
      >
        Show Tooltip
      </button>
    </div>
  );
};

export default TooltipAnimation;
