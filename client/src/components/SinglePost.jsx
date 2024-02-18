import { useState } from "react";
import Like1 from "../assets/like1.png";
import Like2 from "../assets/like2.png";
const SinglePost = ({ data, key }) => {
  const { PostedBy, title, caption, image } = data;
  const name = PostedBy?.name;
  const [like, setLike] = useState(false);
  console.log(data);

  const hadleLike = () => {
    setLike(!like);
  };

  return (
    <div className="lg:flex lg:flex-col lg:w-full md:w-1/2 w-[300px] mx-auto  md:h-full md:justify-center lg:justify-center transition-all delay-300 overflow-auto">
      <div className="flex items-center justify-start gap-2 my-2">
        <img
          src="https://tse4.mm.bing.net/th?id=OIP.TctatNGs7RN-Dfc3NZf91AAAAA&pid=Api&P=0&h=180"
          className="w-7 h-7 rounded-full object-cover object-center"
          alt="profile"
        />
        <p className="font-bold text-white text-lg">{name}</p>
      </div>
      <p className="text-white">{title}</p>
      <img
        src={image}
        alt="post"
        className="w-full h-96 object-fit object-center rounded-md"
      />
      <div>
        <button>
          <img
            src={like ? Like2 : Like1}
            onClick={hadleLike}
            className="w-6 h-6 my-2"
          />
        </button>
      </div>
      <p className="text-gray-300 ">{caption}</p>
      <hr className="my-10" />
    </div>
  );
};

export default SinglePost;
