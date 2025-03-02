import { motion } from "framer-motion";

const PursingButton = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-slate-800">
      <motion.button
        className="py-2 px-4 rounded bg-amber-500"
        animate={{
          scale: [1, 1.4, 1],
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      >
        Submit
      </motion.button>
    </div>
  );
};
export default PursingButton;
