import { motion } from "framer-motion";
import { useState } from "react";

const imagesGallery = [
  "https://rb.gy/c968en",
  "https://rb.gy/es8log",
  "https://rb.gy/vant35",
  "https://rb.gy/hhpqpf",
  "https://rb.gy/zrgph1",
];

const ImageGallaryAnimate = () => {
  const [showImage, setShowImage] = useState(false);

  const parentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        staggerDirection: 1,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const handleClick = () => setShowImage((prev) => !prev);

  return (
    <div className="p-3 text-center">
      <button
        onClick={handleClick}
        className="py-2 px-4 mb-5 rounded bg-amber-500"
        type="button"
      >
        {showImage ? "Hidden Image" : "Show Image"}
      </button>
      <motion.div
        variants={parentVariants}
        initial="hidden"
        animate={showImage ? "visible" : "hidden"}
        className="flex gap-4"
      >
        {imagesGallery.map((image, index) => (
          <motion.img
            className="w-[10rem] rounded-lg "
            src={image}
            alt="images"
            key={index}
            variants={childVariants}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default ImageGallaryAnimate;
