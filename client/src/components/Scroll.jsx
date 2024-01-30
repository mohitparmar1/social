// Scroll.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

const Scroll = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/getPosts");
      const fetchedData = res.data.posts;
      setData(fetchedData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="lg:w-[400px] m-auto mt-10 h-60 overflow-y-auto">
      {data.map((item, i) => (
        <div className="lg:flex lg:flex-col w-full lg:justify-center transition-all delay-300" key={i}>
          <div className="text-black w-full rounded-md h-10 bg-slate-400">{item.title}</div>
          <p>{item.caption}</p>
        </div>
      ))}
    </div>
  );
};

export default Scroll;
