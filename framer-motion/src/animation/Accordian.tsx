import { useState } from "react";
import { motion } from "framer-motion";

const items = [
  {
    title: "Mystic Shadows",
    content: "A tale of unseen forces lurking in the night.",
  },
  {
    title: "Echoes of Time",
    content: "A journey through forgotten memories and lost civilizations.",
  },
  {
    title: "Neon Reverie",
    content: "A cyberpunk dreamscape filled with endless possibilities.",
  },
  {
    title: "Whispering Winds",
    content: "The gentle voice of nature tells an ancient story.",
  },
  {
    title: "Crimson Dusk",
    content: "The sky burns with the promise of an uncertain tomorrow.",
  },
];

const Accordian = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const ToggleItem = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="w-full h-screen flex gap-2 justify-center items-center flex-col">
      {items.map((item, index) => (
        <div
          key={index}
          className="flex items-center flex-col gap-3 bg-gray-800 py-2 px-4 rounded-lg text-white"
        >
          <button
            onClick={() => ToggleItem(index)}
            className="px-4 py-2 rounded bg-gray-500"
          >
            {item.title}
          </button>
          <motion.div
            className="overflow-hidden"
            initial={{ height: 0 }}
            animate={{ height: openIndex === index ? "auto" : 0 }}
            transition={{ duration: 0.5 }}
          >
            <p>{item.content}</p>
          </motion.div>
        </div>
      ))}
    </div>
  );
};
export default Accordian;
