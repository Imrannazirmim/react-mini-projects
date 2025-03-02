import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Modal = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="w-full h-screen bg-gray-800 flex justify-center items-center flex-col">
      <button
        className="py-2 px-4 bg-blue-500 rounded"
        onClick={() => setModalOpen(true)}
      >
        Open
      </button>
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center"
            onClick={(e) => e.stopPropagation()}
            initial={{ y: "-100vh" }}
            animate={{ y: "0vh" }}
            exit={{ y: "100vh" }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white m-2 p-2 rounded-lg shadow">
              <h2 className="text-xl font-semibold p-2">This is Modal</h2>
              <p className="text-justify p-2">
                Lorem ipsum dolor sit amet, consectetur.
              </p>
              <button
                onClick={() => setModalOpen(false)}
                className="bg-red-500 text-white py-2 px-4 rounded mt-2"
              >
                close
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default Modal;
