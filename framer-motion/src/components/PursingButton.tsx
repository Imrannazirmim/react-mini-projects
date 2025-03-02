import { motion } from "framer-motion";

const PursingButton = () => {
  return (
    <div>
      <motion.button
        className="text-white px-4 py-2 rounded bg-blue-500"
        animate={{
          scale: [1, 1.4, 1],
          backgroundColor: ["#3b82f6", "#60a5fa", "#3b82f6"],
        }}
        transition={{ duration: 2,  ease: "easeInOut" }}
      >
        Click Me
      </motion.button>
    </div>
  );
};

export default PursingButton;
