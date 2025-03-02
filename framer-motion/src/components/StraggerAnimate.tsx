import { motion } from "framer-motion";

const StraggerAnimate = () => {
  const parentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 1.2,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <motion.div
      variants={parentVariants}
      initial="hidden"
      animate={"visible"}
      transition={{ type: "spring", duration: 2, stiffness: 300 }}
    >
      {[...Array(5)].map((_, index) => (
        <motion.div
          variants={childVariants}
          className="bg-yellow-600 w-[6rem] rounded-full h-[6rem] mb-3"
          key={index}
        ></motion.div>
      ))}
    </motion.div>
  );
};

export default StraggerAnimate;
