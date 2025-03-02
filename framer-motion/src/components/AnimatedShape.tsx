import { motion } from "framer-motion";

export const AnimatedShape = () => {
  const boxVariants = {
    initial: {
      scale: 1,
      rotate: 0,
      skew: 0,
    },
    hover: {
      scale: 1.2,
      rotate: 15,
      skew: "10deg",
    },
    click: {
      scale: 0.9,
      rotate: -15,
      transition: { duration: 0.3 },
    },
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <motion.div
        className="w-40 h-40 bg-blue-500 rounded-lg"
        variants={boxVariants}
        whileHover={"hover"}
        initial="initial"
        whileTap={"click"}
        drag
      />
    </div>
  );
};
