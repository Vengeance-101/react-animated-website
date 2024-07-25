import { motion } from "framer-motion";
import React from "react";

import { GoArrowUpRight } from "react-icons/go";

const LandingPage = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.3"
      className="w-full h-screen bg-zinc-900 pt-2"
    >
      <div className="textstructure mt-40 px-14">
        {["We Create", "eye opening", "presentation"].map((item, index) => {
          return (
            <div key={index} className="masker">
              <div className="w-fit flex items-center">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "7vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className="w-[7vw] h-[4.4vw] relative -top-[.1vw] bg-red-600 rounded-lg"
                  ></motion.div>
                )}
                <h1 className="uppercase flex items-center text-[6vw] leading-[6vw] font-semibold">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>

      <div className="border-t-[1px] border-zinc-500 pt-5 px-14 mt-28 flex justify-between items-center">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => {
          return (
            <p
              key={index}
              className="font-light text-lg tracking-tight leading-none"
            >
              {item}
            </p>
          );
        })}
        <div className="start flex items-center gap-5">
          <a className="px-5 py-1 flex items-center rounded-full border-[2px] border-zinc-600 uppercase">
            start the project
          </a>
          <div className="p-2 rounded-full border-[2px] border-zinc-600  text-2xl flex justify-center items-center">
            <GoArrowUpRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
