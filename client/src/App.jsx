import React, { useState, useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
  Navigate,
} from "react-router-dom";
import Login from "./Pages/Login";
import "./index.css";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import Create from "./Pages/Create";
import Search from "./Pages/Search";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  const { isAuth, handleLogin, handleLogout } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={isAuth ? <Navigate to="/home" replace /> : <Login />}
        />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<Search />} />
        <Route path="/signup" element={<Signup />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/create" element={<Create />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
