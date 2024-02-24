import React from "react";
import { Link } from "react-router-dom";

const Navlink = () => {
  const [showProfile, setShowProfile] = React.useState(false);

  const handleShowProfile = () => {
    setShowProfile(!showProfile);
  };
  const handleLogout = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/logout", {
        method: "GET",
        credentials: "include",
      });
      const data = await res.json();
      console.log(data);
      if (res.status === 200) {
        window.location.reload();
      }
      // Handle response data or any errors here
    } catch (error) {
      console.error("Error during logout:", error);
      if (error.response.status === 401) {
        alert("Please login to view posts");
      }
      // Handle errors here
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mb-20 text-white gap-4 lg:w-[90%] m-2">
      <Link
        to="/home"
        className="flex items-center justify-start px-1 py-2 cursor-pointer hover:bg-zinc-800 w-full rounded-md"
      >
        <div className="flex items-center justify-start px-1 py-2 cursor-pointer hover:bg-zinc-800 w-full rounded-md lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 mr-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
          <span className="lg:flex hidden lg:text-lg  items-center font-semibold md:flex">
            Home
          </span>
        </div>
      </Link>
      <Link
        to="/search"
        className="flex items-center justify-start px-1 py-2 cursor-pointer hover:bg-zinc-800 w-full rounded-md"
      >
        <div className="flex items-center justify-start px-1 py-2 cursor-pointer hover:bg-zinc-800 w-full rounded-md">
          <svg
            aria-label="Search"
            className="x1lliihq x1n2onr6 x5n08af w-6 h-6 mr-3"
            fill="currentColor"
            height="24"
            role="img"
            viewBox="0 0 24 24"
            width="24"
          >
            <title>Search</title>
            <path
              d="M19 10.5A8.5 8.5 0 1 1 10.5 2a8.5 8.5 0 0 1 8.5 8.5Z"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            ></path>
            <line
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              x1="16.511"
              x2="22"
              y1="16.511"
              y2="22"
            ></line>
          </svg>

          <span className="lg:flex hidden lg:text-lg  items-center font-semibold md:flex">
            Search
          </span>
        </div>
      </Link>

      <div className="flex items-center justify-start px-1 py-2 cursor-pointer hover:bg-zinc-800 w-full rounded-md">
        <svg
          aria-label="Messenger"
          className="x1lliihq x1n2onr6 x5n08af w-6 h-6 mr-3"
          fill="currentColor"
          height="24"
          role="img"
          viewBox="0 0 24 24"
          width="24"
        >
          <title>Messenger</title>
          <path
            d="M12.003 2.001a9.705 9.705 0 1 1 0 19.4 10.876 10.876 0 0 1-2.895-.384.798.798 0 0 0-.533.04l-1.984.876a.801.801 0 0 1-1.123-.708l-.054-1.78a.806.806 0 0 0-.27-.569 9.49 9.49 0 0 1-3.14-7.175 9.65 9.65 0 0 1 10-9.7Z"
            fill="none"
            stroke="currentColor"
            strokeMiterlimit="10"
            strokeWidth="1.739"
          ></path>
          <path
            d="M17.79 10.132a.659.659 0 0 0-.962-.873l-2.556 2.05a.63.63 0 0 1-.758.002L11.06 9.47a1.576 1.576 0 0 0-2.277.42l-2.567 3.98a.659.659 0 0 0 .961.875l2.556-2.049a.63.63 0 0 1 .759-.002l2.452 1.84a1.576 1.576 0 0 0 2.278-.42Z"
            fillRule="evenodd"
          ></path>
        </svg>
        <span className="lg:flex hidden lg:text-lg  items-center font-semibold md:flex">
          Message
        </span>
      </div>
      <div className="flex items-center justify-start px-1 py-2 cursor-pointer hover:bg-zinc-800 w-full rounded-md">
        <svg
          aria-label="Notifications"
          className="x1lliihq x1n2onr6 x5n08af"
          fill="currentColor"
          height="24"
          role="img"
          viewBox="0 0 24 24"
          width="24"
          className="w-6 h-6 mr-3"
        >
          <title>Notifications</title>
          <path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path>
        </svg>
        <span className="lg:flex hidden lg:text-lg  items-center font-semibold md:flex">
          Notifications
        </span>
      </div>
      <Link
        to="/create"
        className="flex items-center justify-start px-1 py-2 cursor-pointer hover:bg-zinc-800 w-full rounded-md"
      >
        <div className="flex items-center justify-start px-1 py-2 cursor-pointer hover:bg-zinc-800 w-full rounded-md">
          <svg
            aria-label="New post"
            className="x1lliihq x1n2onr6 x5n08af"
            fill="currentColor"
            height="24"
            role="img"
            viewBox="0 0 24 24"
            width="24"
            className="w-6 h-6 mr-3"
          >
            <title>New post</title>
            <path
              d="M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552Z"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            ></path>
            <line
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              x1="6.545"
              x2="17.455"
              y1="12.001"
              y2="12.001"
            ></line>
            <line
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              x1="12.003"
              x2="12.003"
              y1="6.545"
              y2="17.455"
            ></line>
          </svg>
          <span className="lg:flex hidden lg:text-lg  items-center font-semibold md:flex">
            Create
          </span>
        </div>
      </Link>
      <div
        onClick={handleShowProfile}
        className="flex items-center justify-start px-1 py-2 cursor-pointer hover:bg-zinc-800 w-full rounded-md"
      >
        <div className="bg-black border-x w-6 h-6 border-y rounded-2xl mr-2">
          <svg
            aria-label="Profile"
            className="x1lliihq x1n2onr6 x5n08af"
            fill="currentColor"
            height="24"
            role="img"
            viewBox="0 0 24 24"
            width="24"
            className="w-5 h-5 mr-3"
          >
            <title>Profile</title>
            <path
              d="M12 2c3.314 0 6 2.686 6 6 0 3.314-2.686 6-6 6-3.314 0-6-2.686-6-6 0-3.314 2.686-6 6-6Zm0 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            ></path>
            <path
              d="M21.5 21.5c-1.5-1.5-4.5-3-9-3s-7.5 1.5-9 3"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            ></path>
          </svg>
        </div>
        <span className="lg:flex hidden lg:text-lg  items-center font-semibold md:flex">
          Profile
        </span>
        {showProfile && (
          <div className="flex flex-col gap-4  items-center justify-center bg-white mx-w-32 mx-h-32 absolute top-45 left-32 rounded-md">
            <Link
              to="/profile"
              className="text-black hover:bg-zinc-200 py-2 px-2 font-bold rounded-sm"
            >
              My Profile
            </Link>
            <Link
              to=""
              onClick={handleLogout}
              className="text-black hover:bg-zinc-200 py-2 px-2 font-bold rounded-sm"
            >
              Logout
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navlink;
