import React, { useState } from "react";
const Signup = async () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);

    try {
      const res = await fetch("http://localhost:3000/api/signup", formData);
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
    /* The `};` at the end of the code snippet is closing the `Signup` component function in JavaScript. It
signifies the end of the function block and the end of the component definition. */
  };

  return (
    <div className="container mx-auto flex justify-center bg-white">
      <div className="bg-white w-1/2 my-36 flex flex-col gap-5 py-5">
        <h1 className="text-center text-xl font-sixty">Welcome To Social</h1>
        <form className="flex flex-col mx-12 my-5" onSubmit={handleSignup}>
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            onChange={(e) => {
              setName(e.target.value);
            }}
            className="border-2 border-gray-300 outline-none py-2 px-3 rounded-md"
          />
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="border-2 border-gray-300 outline-none py-2 px-3 rounded-md"
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="border-2 border-gray-300 outline-none py-2 px-3 rounded-md"
          />
          <button className="bg-blue-500 text-white rounded-md py-2 mt-5">
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
