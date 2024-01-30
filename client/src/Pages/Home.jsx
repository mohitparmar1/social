import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Sidebar from "../components/Sidebar";
import Post from "../components/Post";
import Scroll from "../components/Scroll";
const Home = () => {
  return (
    <div className="">
      <Sidebar />
      <Scroll />
    </div>
  );
};

export default Home;
