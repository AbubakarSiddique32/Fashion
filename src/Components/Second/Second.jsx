import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import image from "../../Images/Shoes 1.png";

const Second = () => {
  return (
    <div className=" bg-[#EDEDED]">
      <div className=" flex py-10">
        <div className="left w-[60%]">
          <div className=" w-[80%] py-5 px-8  m-auto rounded-[40px] bg-white">
            <div className=" w-full h-full">
              <img src={image} alt="" className="w-full h-full" />
            </div>
          </div>
        </div>
        <div className="right w-[40%] flex items-center">
          <div className="data flex flex-col ">
            <h1 className=" font-Belanosima text-[60px] font-[500] leading-[60px] text-[#000000]">
              Elevate Your Perfomance
              <span className=" text-[#FFA940]">With Stride X </span>Footwear
            </h1>
            <p className=" text-[#5C5C5C] font-poppins text-[18px] mt-[40px]">
              StrideX Shoes Blend Cuting- Edge Design WIth Superior Comfort.
              Ensuring You Stay Ahead in Every Step.
            </p>

            <div className="main-button">
              <button className=" flex items-center gap-3 mt-10 outline-none">
                <span className=" px-[20px] py-[5px] border rounded-full text-[#000000] text-[20px] font-[700] border-black">
                  Shop Now
                </span>
                <GoArrowUpRight className="bg-black p-[5px] rounded-full text-white w-[38px] h-[38px]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Second;
