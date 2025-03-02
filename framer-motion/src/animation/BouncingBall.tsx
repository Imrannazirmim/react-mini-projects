import { motion } from "framer-motion";
const BouncingBall = () => {
  return (
    <div className="w-full h-screen bg-black flex justify-center items-center">
      <motion.div
        className="h-32 w-32 rounded-full bg-amber-500"
        animate={{
          y: [0, -100, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
          
        }}
      />
    </div>
  );
};
export default BouncingBall;
