import { motion } from "framer-motion";
import { useState } from "react";
import { variants } from "./Viriant";

const Variant = () => {
    const [isVisible, setIsVisible] = useState(true)
  return (
    <div>
      <motion.div
        className="box"
        variants={variants}
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
        exit={'exit'}
        transition={{duration: 2}}
        onClick={() => setIsVisible(!isVisible)}
      />
    </div>
  );
};

export default Variant;
