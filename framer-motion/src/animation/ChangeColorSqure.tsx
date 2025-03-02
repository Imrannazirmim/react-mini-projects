import { motion } from "framer-motion";

const ChangeColorSqure = () => {
  return (
    <motion.div
      className="w-32 h-32 "
      animate={{
        backgroundColor: ["#ff0000", "#00ff00", "#0000ff", "#ff0000"],
        scale: [1, 2, 3, 2, 1],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
      }}
    />
  );
};

export default ChangeColorSqure;
