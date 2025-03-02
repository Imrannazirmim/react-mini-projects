import { motion } from "framer-motion";

const AnimatedCard = () => {
  return (
    <motion.div
      className="max-w-sm mx-auto bg-white rounded-lg overflow-hidden cursor-pointer"
      initial={{ scale: 1, rotate: 0 }}
      whileHover={{ scale: 1.3, rotate: 3 }}
      whileTap={{ scale: 0.65, }}
      drag
      dragConstraints={{
        top: -50,
        left: -50,
        right: 50,
        bottom: 50
      }}
      dragElastic={0.3}
      transition={{type: 'spring', stiffness: 300, duration: 2}}
    >
      <img
        src="https://images.pexels.com/photos/39857/leopard-leopard-spots-animal-wild-39857.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="tiger"
        className="w-full h-48 object-cover"
      />
      <div className="text-justify m-5">
        <h2 className="text-gray-800 text-[1.1rem]">
          This is tiger very nice look.
        </h2>
        <p className="text-[0.9rem] text-gray-700 mt-5">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam,
          error.
        </p>
        <div className="mt-4 text-end">
          <button
            type="button"
            className="px-4 py-2 rounded bg-teal-500 hover:bg-teal-300 transition "
          >
            Learn More
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default AnimatedCard;
