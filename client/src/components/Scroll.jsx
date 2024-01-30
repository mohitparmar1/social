import React, { useEffect, useState } from "react";
import axios from "axios";
const Scroll = () => {
  const [Data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/getPosts");
      const data = res.data.posts;
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      {Data.map((item, i) => (
        <div
          className="md:flex justify-center transition-all delay-300"
          key={i}
        >
          <h1 className="text-black">{item.title}</h1>
          {item.caption && <p>{item.caption}</p>}
        </div>
      ))}
    </div>
  );
};

export default Scroll;
