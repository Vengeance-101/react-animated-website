import { motion } from "framer-motion";
import React from "react";
const Marquee = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".2"
      className="w-full py-24 text-white rounded-t-3xl bg-[#004D43]"
    >
      <div className="text  border-t-2 flex font-extrabold  items-center  uppercase border-b-2 border-zinc-200  whitespace-nowrap overflow-hidden">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className="text-[20vw] leading-none -mb-[2vw] pr-20  -mt-[2vw] tracking-tighter "
        >
          We are Ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className="text-[20vw] leading-none -mb-[2vw] pr-20  -mt-[2vw]  tracking-tighter "
        >
          We are Ochi
        </motion.h1>
      </div>
    </div>
  );
};

export default Marquee;
