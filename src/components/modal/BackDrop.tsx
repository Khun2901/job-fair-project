import { motion } from "framer-motion";
import React from "react";

const BackDrop = ({ children, onClose, position } : { children: React.ReactNode, onClose: ()=>void, position?: "top"|"center"|"bottom"}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`w-screen h-screen fixed z-[9999] bg-black/80 top-0 flex justify-center backdrop-blur-sm 
        ${position === "bottom" ? 'items-end' : position === "top" ? "items-start" : "items-center"} `}
      onClick={onClose}
    >
      {/* <div onClick={e=>e.stopPropagation()} > */}
      {children}
      {/* </div> */}
    </motion.div>
  );
};

export default BackDrop;