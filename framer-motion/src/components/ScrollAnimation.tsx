import { motion, useScroll, useTransform } from "framer-motion";

const ScrollAnimation = () => {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 300], [1, 1.5]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div className="flex justify-center items-center h-screen">
      <motion.div
        className="w-72 h-48 rounded-lg bg-blue-500"
        style={{ scale, opacity }}
      >
        <div className="w-full h-[150vh]">
          <h2>This is animation Card</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium, laboriosam.
          </p>
        </div>
      </motion.div>
    </div>
  );
};
export default ScrollAnimation;
