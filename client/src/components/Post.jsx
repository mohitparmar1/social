import React, { useState } from "react";
import axios from "axios";

const Post = () => {
  const [title, setTitle] = useState("");
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState("");

  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/upload",
        {
          title,
          caption,
        },
        config
      );

      console.log("Post created:", response.data);
      // Optionally, you can reset the form fields after successful submission
      setTitle("");
      setCaption("");
    } catch (error) {
      console.error("Error creating post:", error.message);
    }
  };

  return (
    <div className="lg:w-full lg:bg-green-200 p-4 lg:flex lg:items-center lg:justify-center">
      <h2 className="text-2xl font-bold mb-4">Create a New Post</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
          className="mt-1 p-2 w-full border rounded-md"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Body</label>
        <textarea
          className="mt-1 p-2 w-full border rounded-md"
          rows="4"
          placeholder="Enter body"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
        ></textarea>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Image</label>
        <input
          type="file"
          className="mt-1 p-2 w-full border rounded-md"
          value={image}
          onChange={(e) => setImage(e.target.value)}
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
