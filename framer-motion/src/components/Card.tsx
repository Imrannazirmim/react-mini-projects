import { motion } from "framer-motion";

const Card = () => {
  return (
    <div>
      {/* whileover */}
      <motion.div
        className="box transform-3d shadow-lg"
        whileHover={{ scale: 2.5, rotate: 15 }}
        transition={{ type: "spring", stiffness: 300 }}
      />
      {/* whiletap */}
      <motion.div
        className="box mt-10"
        whileTap={{
          scale: 1.5,
          rotate: 10,
          backgroundColor: 'coral'
        }}
        transition={{ type: "spring", stiffness: 300 }}
      />
      {/* whiledrag */}
      <motion.div className="box mt-10" drag dragConstraints={{
        top: -50,
        left: -50,
        right: 50,
        bottom: 50
      }}/>
    </div>
  );
};

export default Card;
