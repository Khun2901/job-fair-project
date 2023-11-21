import { AnimatePresence, motion } from "framer-motion";
import { FC, FormEventHandler, FormHTMLAttributes, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import BackDrop from "./BackDrop";
import Portal from "./Portal";
import { AnyAction } from "redux";

export default function ETCModal({children, isOpen, onClose, disableBGClose}: 
  {children?: React.ReactNode, isOpen: boolean, onClose: ()=>void, disableBGClose?: boolean}){
  
  return (
    <Portal>

      <ToastContainer/>
        <AnimatePresence initial={false} onExitComplete={() => null}>
          {isOpen && (
          <BackDrop
            onClose={disableBGClose ? () => {} : onClose}
            position="center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.2 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: -2, scale: 0.2 }}
              className="mt-10 max-w-3xl w-full
             bg-neutral-200 p-10 border-4 border-solid border-neutral-500 text-[#111b47] z-[9999]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="pb-5 flex flex-col gap-10 justify-center items-center ">
                <h1 className="font-bold text-2xl text-center mt-6">
                  Are you sure you want to <span className="text-[#FF0000]">DELETE</span> this booking?
                </h1>
                <div className="flex flex-row gap-20">
                <button className='w-auto text-white bg-[#FF3333] border-[#FF3333]
                    font-semibold text-[18px] py-1 px-10 rounded-lg border-2 
                    hover:bg-white hover:text-[#FF3333]'
                    onClick={onClose}
                    >
                    Delete
                </button>
                <button className='w-auto text-[#111b47] bg-gray-200 border-[#111b47]
                    font-semibold text-[18px] py-1 px-10 rounded-lg border-2 
                    hover:bg-[#111b47] hover:text-white'
                    onClick={onClose}
                    >
                    Cancel
                </button>
                </div>
                {/* <button className="p-2" onClick={onClose} > <AiOutlineClose/> </button> */}
              </div>
              
            </motion.div>
          </BackDrop>
        )}
      </AnimatePresence>
    </Portal>
  );
};