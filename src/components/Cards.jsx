import React from "react";

const Cards = () => {
  return (
    <div className="w-full h-screen flex justify-center gap-5 px-14 items-center">
      <div className="main-card w-1/2 h-[60vh] bg-[#004D43] flex justify-center items-center rounded-2xl ">
        <img
          src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
          alt=""
          className="w-1/5"
        />
      </div>
      <div className="sub-card-div w-1/2 h-[60vh] flex justify-center items-center gap-5  rounded-2xl ">
        <div className="sub-card-1 bg-[#212121]  h-full w-1/2  rounded-2xl border-4 border-zinc-500 cursor-pointer flex justify-center items-center">
          <img
            className="w-1/2"
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt=""
          />
        </div>
        <div className="sub-card-2 bg-[#212121] h-full w-1/2  rounded-2xl border-4 border-zinc-500 cursor-pointer flex justify-center items-center">
          <img
            className="w-1/3"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Cards;
