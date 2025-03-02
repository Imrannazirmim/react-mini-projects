import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const ToastNotification = () => {
  const [visible, setVisible] = useState(false);

  const handleShowToast = () => {
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
    }, 3000);
  };
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <button
        onClick={handleShowToast}
        className="px-4 py-2 rounded bg-teal-500"
      >
        Show Notification
      </button>
      <AnimatePresence>
        {visible && (
          <motion.div
            className="fixed top-4 right-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <span className="px-4 py-2 rounded bg-teal-500">
              Verification Successfully
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default ToastNotification;
