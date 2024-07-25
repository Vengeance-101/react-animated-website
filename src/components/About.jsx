import React from "react";

const About = () => {
  return (
    <div className=" w-full py-20 rounded-t-3xl  bg-[#CDEA68] text-[#212121]">
      <div className="text px-14">
        <h1 className="text-5xl text-left font-semibold leading-[3.5vw] tracking-tight pr-40">
          Ochi is a strategic partner for fast-grow­ing tech businesses that
          need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire
          great peo­ple.
        </h1>
      </div>
      <div className="w-full border-t-[1px] flex gap-5 px-14  border-[#99AD53] py-10 mt-20">
        <div className="w-1/2">
          <h1 className="text-5xl font-semibold">Our approach:</h1>
          <button
            type=""
            className="px-8 py-4 flex gap-10 items-center justify-between uppercase bg-zinc-900 rounded-full mt-10 text-white text-lg"
          >
            Read More
            <div className="w-2 h-2 rounded-full bg-white"></div>
          </button>
        </div>
        <div className="w-1/2 h-[70vh] bg-red-600 rounded-2xl overflow-hidden transition ease-in-out  hover:scale-95">
          <img
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
            alt=""
            className="w-full object-cover  transition ease-in-out  hover:scale-110"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
