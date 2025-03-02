import { useMotionValue, useTransform } from "framer-motion";
import { motion } from "framer-motion";

const DragggableBox = () => {
  //framer motion using usemotionvalue
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  //usetransform
  const backgroundColor = useTransform(x, [-100, 100], ["#e53131", "#4ee567"]);
  return (
    <motion.div
      drag
      dragConstraints={{
        left: -200,
        right: 200,
        top: -200,
        bottom: 200,
      }}
      style={{ x, y, backgroundColor }}
      className="w-32 h-32 flex items-center justify-center rounded-lg shadow-lg cursor-pointer"
    >
      <h2 className="text-white">Drag Me!</h2>
    </motion.div>
  );
};
export default DragggableBox;
