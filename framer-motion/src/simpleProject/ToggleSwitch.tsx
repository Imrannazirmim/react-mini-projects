import { motion } from "framer-motion";
import { useState } from "react";

const switchVariants = {
  off: { x: 5 },
  on: { x: 170 },
};

const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-[15rem] h-20 rounded-full bg-gray-700">
        <motion.button
        onClick={() => setIsOn(!isOn)}
          variants={switchVariants}
          initial="off"
          animate={isOn ? "on" : "off"}
          transition={{
            duration: 0.5,
            
          }}
          className="w-16 text-amber-500 text-center h-16 mt-2 rounded-full bg-gray-500"
        >
            {isOn ? 'On' : 'Off'}
        </motion.button>
      </div>
    </div>
  );
};

export default ToggleSwitch;
