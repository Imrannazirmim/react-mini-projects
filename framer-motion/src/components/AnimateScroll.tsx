import { motion, useScroll, useTransform } from "framer-motion";

const AnimateScroll = () => {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 1000], [1, 0.5]);
  const borderRadius = useTransform(scrollY, [0, 1000], ["0%", "50%"]);
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <motion.img
        src="https://images.unsplash.com/photo-1598755257130-c2aaca1f061c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2lsZCUyMGFuaW1hbHxlbnwwfHwwfHx8MA%3D%3D"
        className=" inset-0 w-full h-screen object-cover"
        style={{ scale, borderRadius }}
      />
      <div className="sticky top-0 h-screen flex items-center">
        <h2 className="text-4xl text-white">Animated Scroll Images</h2>
      </div>
    </div>
  );
};
export default AnimateScroll;
