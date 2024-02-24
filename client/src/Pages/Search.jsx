import React, { useState } from "react";
import axios from "axios";

const SearchComponent = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/search?q=${searchQuery}`
      );
      const users = response.data.users;
      console.log(users);
      setSearchResults(users);
    } catch (error) {
      console.error("Error searching for users:", error);
      // Handle error, e.g., display error message to the user
    }
  };

  return (
    <div className="flex flex-col gap-2 ">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button className="bg-white" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchComponent;
