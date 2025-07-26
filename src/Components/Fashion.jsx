import React from "react";
import Navbar from "./Navbar";
import Main from "./Main";
import Second from "./Second/Second";
const Fashion = () => {
  return (
    <>
      <div className=" relative">
        <div className=" fixed w-full bg-[rgba(255,255,255,0.9)]">
          <Navbar />
        </div>
        <Main />
        <Second />
      </div>
    </>
  );
};

export default Fashion;
