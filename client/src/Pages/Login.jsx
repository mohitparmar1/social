import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../utils/apiUrl.js";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const { setIsAuth, IsAuth } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${API_URL}login`,
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );
      const data = await res.data;
      console.log(data);
      if (res.status === 200) {
        setIsAuth(true);
        navigate("/home", { replace: true });
      }

      alert(res.data.message);
    } catch (error) {
      if (email === "" || password === "")
        return alert("Please fill in all fields.");
      console.error("Error during login:", error);
      alert("An error occurred during login" + error.message);
    }
  };

  return (
    <div className="w-full h-screen bg-gray-100 flex">
      <div className="flex flex-col w-[300px] h-500px m-auto py-10 px-5 justify-center border-2 border-gray-300 bg-slate-50">
        <h1 className="text-center font-bold text-2xl">Social</h1>
        <form onSubmit={handleSubmit} className="flex flex-col w-[100%] py-5 ">
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Email/Username"
            className="mb-5 py-2 placeholder:text-lg px-2 border-x border-y outline-none border-black rounded-md"
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="off"
          />
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            className="mb-5 py-2 placeholder:text-lg px-2 border-x border-y outline-none border-black rounded-md"
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="off"
          />
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Login
          </button>
        </form>
        <hr className="mb-3" />
        <div className="flex flex-row justify-center">
          <p>Don't have an account?</p>
          <button
            type="submit"
            className="text-blue-500 hover:text-blue-700"
            onClick={() => navigate("/signup")}
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
