import React from "react";
import logo from "../Images/logoNav.png";

const navLinks = ["Home", "Shop", "Women", "Men", "Sale"];

const Navbar = () => {
  return (
    <div>
      <nav className=" flex">
        <div className="left flex items-center gap-2">
          <div className="logo w-[20%]">
            <img src={logo} alt="" className=" w-full" />
          </div>
          <h4 className=" ">Fashion</h4>
        </div>
        <div className="center">
          <ul className=" flex gap-10">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a href="">{link}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
