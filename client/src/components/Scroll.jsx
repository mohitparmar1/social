// Scroll.jsx
import { useEffect, useState } from "react";
import { API_URL } from "../utils/apiUrl";
import axios from "axios";

const Scroll = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get(`${API_URL}getPosts`);
      const fetchedData = res.data.posts;
      setData(fetchedData);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="lg:w-[400px] lg:absolute lg:top-0 left-[30%] mt-10">
      {data.map((item, i) => (
        <div
          className="lg:flex lg:flex-col w-full lg:justify-center transition-all delay-300"
          key={i}
        >
          <div className="text-black w-full rounded-md h-10 bg-slate-400">
            {item.title}
          </div>
          <p>{item.caption}</p>

          <img
            src={item.image}
            alt="post"
            className="w-full h-96 object-cover object-center rounded-md"
          />
        </div>
      ))}
    </div>
  );
};

export default Scroll;
