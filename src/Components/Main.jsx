import React from "react";
import main from "../Images/Shoes.png";
import { GoArrowUpRight } from "react-icons/go";
import footer from "../Images/Footer.png";

const Main = () => {
  return (
    <div className="">
      <div className="body flex pb-5 px-10">
        <div className="left w-[40%] flex items-center pt-[90px]">
          <div className="data flex flex-col ">
            <h1 className=" font-Belanosima text-[60px] font-[500] leading-[60px] text-[#000000]">
              Elevate Your Perfomance
              <span className=" text-[#FFA940]">With Stride X </span>Footwear
            </h1>
            <p className=" text-[#5C5C5C] font-poppins text-[20px] mt-[40px]">
              StrideX Shoes Blend Cuting- Edge Design WIth Superior Comfort.
              Ensuring You Stay Ahead in Every Step.
            </p>

            <div className="main-button">
              <button className=" flex items-center gap-3 mt-10 outline-none">
                <span className=" px-[20px] py-[5px] border rounded-full text-[#000000] text-[20px] font-[700] border-black">
                  Explore
                </span>
                <GoArrowUpRight className="bg-black p-[5px] rounded-full text-white w-[38px] h-[38px]" />
              </button>
            </div>
          </div>
        </div>
        <div className="right w-[60%]">
          <div className="main-image w-full">
            <img src={main} alt="" className=" w-full" />
          </div>
        </div>
      </div>
      <div className="footer w-full">
        <div className="image w-full">
          <img src={footer} alt="" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Main;
