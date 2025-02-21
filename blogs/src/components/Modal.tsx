import React from "react";

const Modal: React.FC<{ children: React.ReactNode; onClose: () => void }> = ({
  onClose,
  children,
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-4 rounded-lg shadow relative">
        {children}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-800 font-bold border-2 p-2 rounded-full hover:bg-gray-200"
        >
          X
        </button>
      </div>
    </div>
  );
};

export default Modal;
