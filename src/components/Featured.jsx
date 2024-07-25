import { motion, useAnimation } from "framer-motion";
import React from "react";
const Featured = () => {
  const cards = [useAnimation(), useAnimation()];

  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };
  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };
  return (
    <div className="w-full py-24 bg-zinc-900">
      <div className="w-full px-14 border-b-[2px] border-zinc-500 pb-14">
        <h1 className="text-6xl tracking-tight">Featured Projects</h1>
      </div>
      <div className="cards relative flex gap-10 px-14 mt-20">
        <motion.div
          onHoverStart={() => {
            handleHover(0);
          }}
          onHoverEnd={() => {
            handleHoverEnd(0);
          }}
          className="card-Container w-1/2 h-[80vh] rounded-3xl relative"
        >
          <h1 className="text-8xl flex font-bold uppercase overflow-hidden top-1/2 -translate-y-1/2 text-[#CDEA68] z-[99] absolute leading-none tracking-tight left-full">
            {"FYDE".split("").map((item, index) => {
              return (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  className="inline-block"
                  key={index}
                >
                  {item}
                </motion.span>
              );
            })}
          </h1>

          <div className="card w-full h-full    bg-[#CACACB] rounded-3xl  overflow-hidden ">
            <img
              className="w-full h-full object-cover "
              src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
              alt=""
            />
          </div>
        </motion.div>
        <motion.div
          onHoverStart={() => {
            handleHover(1);
          }}
          onHoverEnd={() => {
            handleHoverEnd(1);
          }}
          className="card-Container w-1/2 h-[80vh] rounded-3xl relative"
        >
          <h1 className="text-8xl font-bold flex overflow-hidden uppercase translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68] z-[99] absolute leading-none tracking-tight right-full">
            {"VISE".split("").map((item, index) => {
              return (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  className="inline-block"
                  key={index}
                >
                  {item}
                </motion.span>
              );
            })}
          </h1>

          <div className="card w-full h-full    bg-[#CACACB] rounded-3xl  overflow-hidden ">
            <img
              className="w-full h-full object-cover "
              src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
              alt=""
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Featured;
