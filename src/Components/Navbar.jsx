import React from "react";
import logo from "../Images/logoNav.png";
import { FaRegHeart } from "react-icons/fa6";
import { RiShoppingBagLine } from "react-icons/ri";

const navLinks = ["Home", "Shop", "Women", "Men", "Sale"];

const Navbar = () => {
  return (
    <div className=" py-5 px-10  w-full ">
      <nav className=" flex items-center ">
        <div className="left w-[20%] flex items-center gap-2">
          <div className="logo w-[15%]">
            <img src={logo} alt="" className=" w-full" />
          </div>
          <h4 className=" font-Belanosima font-[700] text-black text-[20px] leading-7 ">
            Fashion
          </h4>
        </div>
        <div className="center w-[60%] flex justify-center ">
          <ul className=" flex gap-10 bg-[#E6E6E6] rounded-full px-5 py-2">
            {navLinks.map((link, index) => (
              <li
                key={index}
                className=" hover:bg-white px-2 py-1 rounded-full"
              >
                <a
                  href=""
                  className=" font-Belanosima text-black text-[17px] fpnt-[700]"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="right w-[20%] flex items-center  justify-end gap-4">
          {/* Heart Icon */}
          <div className="bg-gray-100 rounded-full p-2 hover:bg-gray-200 cursor-pointer">
            <FaRegHeart className="text-black text-[20px]" />
          </div>

          {/* Cart Icon with Text */}
          <div className="flex items-center gap-1">
            <div className="bg-gray-100 rounded-full p-2 hover:bg-gray-200 cursor-pointer">
              <RiShoppingBagLine className="text-black text-[20px]" />
            </div>
            <span className=" text-[17px] font-semibold font-Belanosima ml-2">
              Cart(1)
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
