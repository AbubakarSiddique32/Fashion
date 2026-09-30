import React from "react";
import Navbar from "./Navbar";
import Main from "./Main";
import Second from "./Second/Second";
import Third from "./Third/Third";
import Fourth from "./Fourth/Fourth";
import Fifth from "./Fifth/Fifth";
const Fashion = () => {
  return (
    <>
      <div className=" relative">
        <div className=" fixed w-full bg-[rgba(255,255,255,0.9)]">
          <Navbar />
        </div>
        <Main />
        <Second />
        <Third/>
        <Fourth/>
        <Fifth/>
      </div>
    </>
  );
};

export default Fashion;
