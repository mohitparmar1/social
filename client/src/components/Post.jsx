import React, { useState } from "react";
import axios from "axios";
const Post = () => {
  const [title, setTitle] = useState("");
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState(null);

  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    withCredentials: true,
  };

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("caption", caption);
      formData.append("image", image);

      const response = await axios.post(
        `http://localhost:3000/api/upload`,
        formData,
        config
      );

      console.log("Post created:", response.data);
      // Optionally, you can reset the form fields after successful submission
      setTitle("");
      setCaption("");
      setImage(null);
    } catch (error) {
      console.error("Error creating post:", error.message);
    }
  };

  return (
    <div
      className="md:flex  justify-center md:flex-col  lg:flex  mx-auto
     lg:flex-col lg:relative mt-5  w-1/2"
    >
      <h2 className="text-2xl font-bold mb-4 text-white">Create a New Post</h2>
      <div className="mb-4 ">
        <label className="block text-sm font-medium text-gray-200">Title</label>
        <input
          type="text"
          className="mt-1 p-2 w-full border rounded-md"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-200">
          Caption
        </label>
        <textarea
          className="mt-1 p-2 w-full border rounded-md"
          rows="4"
          placeholder="Enter body"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
        ></textarea>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-200">Image</label>
        <input
          type="file"
          className="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-xl cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          onChange={(e) => setImage(e.target.files[0])}
        />
      </div>
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default Post;
