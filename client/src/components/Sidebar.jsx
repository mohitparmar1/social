import React from "react";
import Logo from "../assets/s.png";
import Navlink from "./Navlink";

const Sidebar = () => {
  return (
    <div className="lg:w-[300px]  md:w-[200px] w-[70px] h-screen bg-black absolute">
      <div className="lg:flex lg:justify-center items-center">
        {/* Show logo on small screens, hide on medium and large screens */}
        <img
          src={Logo}
          alt="logo"
          className="w-7 h-7 mx-4 my-4 block lg:hidden md:hidden"
        />

        {/* Show text on medium and large screens, hide on small screens */}
        <h1 className="text-white  lg:items-center md:text-lg lg:text-2xl py-5 px-5 text-center font-sixty cursor-pointer hidden md:block lg:block">
          Social
        </h1>
      </div>
      <Navlink />
    </div>
  );
};

export default Sidebar;
