import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Sidebar from "../components/Sidebar";
import Post from "../components/Post";
const Home = () => {
  return (
    <div>
      <Sidebar />
      <Post />
    </div>
  );
};

export default Home;
