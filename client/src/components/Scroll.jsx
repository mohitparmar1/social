import { useEffect, useState } from "react";
import axios from "axios";
import SinglePost from "./SinglePost";

const Scroll = () => {
  const [data, setData] = useState([]);
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get(`${API_BASE_URL}/getPosts`, {
        withCredentials: true,
      });
      const fetchedData = await res.data.posts;
      setData(fetchedData);
    } catch (error) {
      if (error.response.status === 401) {
        alert("Please login to view posts");
      }
      console.error("Error fetching posts:", error);
    }
  };

  return (
    <div className="lg:w-[400px] lg:absolute lg:top-0 left-[30%] mt-10 h-full overflow-y-auto">
      <div className="max-h-[600px] md:max-h-[600px] lg:max-h-full overflow-y-auto md:overflow-visible lg:overflow-visible">
        {data.map((item, i) => (
          <SinglePost data={item} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Scroll;
