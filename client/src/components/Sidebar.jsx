import React from "react";
import Logo from "../assets/s.png";
import Navlink from "./Navlink";

const Sidebar = () => {
  const [show, setShow] = React.useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  const handleMouseEnter = () => {
    setShow(true);
  };

  const handleMouseLeave = () => {
    setShow(false);
  };

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
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="flex flex-row w-[90%] mx-3 py-2 px-2 items-center hover:bg-zinc-800 hover:rounded-md cursor-pointer"
      >
        <div className="flex gap-1 flex-col items-center justify-center mr-3">
          <span className="flex text-lg bg-white items-center font-semibold w-7 h-1 rounded-md"></span>
          <span className="flex text-lg bg-white items-center font-semibold w-7 h-1 rounded-md"></span>
          <span className="flex lg:text-lg md:text-lg bg-white items-center font-semibold w-7 h-1 rounded-md"></span>
        </div>
        <span className="lg:flex hidden lg:text-lg  items-center font-semibold md:flex text-white">
          More
        </span>
        {/* Profile option component */}
        {show && (
          <div className="absolute bottom-40 right-0 bg-white p-2 shadow-md">
            {/* Your profile content goes here */}
            <p>Simple Profile Options</p>
            {/* Close button */}
            <button>Close</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
