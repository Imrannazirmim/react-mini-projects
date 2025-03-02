import {  motion } from "framer-motion";

const AnimationBackground = () => {
  return (
        <motion.div
          className="w-full h-screen"
          animate={{
            backgroundColor: ["#ff0000", "#0000ff", "#00ff00", "#ff0000"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "loop",
          }}
        ></motion.div>
  );
};

export default AnimationBackground;
