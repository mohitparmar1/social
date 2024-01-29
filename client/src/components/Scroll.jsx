import React, { useEffect, useState } from "react";
import axios from "axios";
const Scroll = () => {
  const [Data, setData] = useState([]);

  setInterval(() => {
    fetchData();
  }, 3000);

  const fetchData = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/getPosts");
      const data = await res.json();
      console.log(data.posts);
      setData(data.posts);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {Data.map((item, i) => (
        <div className="md:flex justify-center transition-all delay-300" key={i}>
          <h1 className="text-black">{item.title}</h1>
          {item.caption && <p>{item.caption}</p>}
          <img
            src={`http://localhost:3000/public/uploads/${item.image}`}
            alt=""
          />
        </div>
      ))}
    </div>
  );
};

export default Scroll;
