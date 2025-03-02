import { motion } from "framer-motion";

const BouncingBall = () => {
  return (
    <div className="flex justify-center items-center space-x-2">
      {[...Array(3)].map((_, index) => (
        <motion.div
          key={index}
          className="h-8 w-8 bg-teal-500 rounded-full"
          animate={{ y: [0, -15, 0] }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: index * 0.1,
          }}
        />
      ))}
    </div>
  );
};

export default BouncingBall;
