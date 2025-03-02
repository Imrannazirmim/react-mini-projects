import { motion } from "framer-motion";
import { useState } from "react";

const RotateDrag = () => {
  const [rotateValue, setRotateValue] = useState(0);
  const handleDrag = (_: any, info: any) => {
    const newValue = rotateValue + info.offset.x;
    setRotateValue(newValue);
  };
  return (
    <motion.div
      drag
      onDrag={handleDrag}
      style={{ rotate: rotateValue }}
      className="w-32  h-32 rounded-lg bg-red-500"
    ></motion.div>
  );
};

export default RotateDrag;
