import { motion, useSpring } from "framer-motion";
import { ChangeEvent } from "react";

export const RangeSlider = () => {
  const scale = useSpring(1);
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    scale.set(parseFloat(e.target.value));
  };

  return (
    <div>
      <motion.button
        className="box rounded-full"
        style={{ scale: scale }}
      ></motion.button>
      <div className="mt-[22rem]">
        <input
          type="range"
          min={0.5}
          max={5}
          step={0.01}
          defaultValue={1}
          onChange={changeHandler}
        />
      </div>
    </div>
  );
};

