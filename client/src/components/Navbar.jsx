import React, { useState } from "react";
import { FaSearch, FaUserCircle, FaEnvelope, FaBell } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const handleSearch = () => {
    console.log("Searching for:", searchTerm);
  };

  return (
    <div className="flex justify-center bg-gray-800 p-4">
      <div className="flex items-center justify-between bg-gradient-to-r from-emerald-500 to-turquoise-500 w-full max-w-6xl p-3 rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:scale-105">
        {/* Hamburger Menu */}
        <div className="text-white cursor-pointer md:hidden transition-all duration-300 transform hover:text-emerald-300 hover:scale-125 hover:rotate-6">
          <HiMenu size={24} />
        </div>

        {/* Logo */}
        <div className="text-white font-extrabold text-2xl transition-all duration-300 cursor-pointer transform hover:scale-125 hover:text-emerald-300 hover:-rotate-6">
          <span className="hover:text-emerald-300">Vibe</span>{" "}
          <span className="hover:text-rose-500">Check</span>
        </div>

        {/* Search Bar */}
        <div
          className={`flex items-center bg-white rounded-full px-2 shadow-inner w-full max-w-md mx-4 transition-all duration-300 ${
            isSearchFocused ? "ring-2 ring-emerald-500" : ""
          } hover:shadow-lg hover:ring-2 hover:ring-turquoise-500`}
        >
          <input
            type="text"
            className="flex-grow p-2 text-gray-800 rounded-l-full focus:outline-none font-sans"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => setIsSearchFocused(false)}
          />
          <button
            className="text-emerald-500 p-2 rounded-r-full transition-all duration-300 transform hover:text-turquoise-500 hover:bg-emerald-100 hover:scale-110 hover:shadow-lg hover:-rotate-12"
            onClick={handleSearch}
          >
            <FaSearch />
          </button>
        </div>

        {/* User Icons */}
        <div className="flex items-center space-x-4">
          <IconButton icon={FaEnvelope} notificationCount={3} />
          <IconButton icon={FaBell} notificationCount={5} />
          <IconButton icon={FaUserCircle} />
        </div>
      </div>
    </div>
  );
};

const IconButton = ({ icon: Icon, notificationCount }) => {
  return (
    <div className="relative group">
      <div className="bg-gray-800 p-2 rounded-full shadow-md transition-all duration-300 transform group-hover:bg-emerald-500 group-hover:scale-125 group-hover:shadow-xl group-hover:-rotate-12">
        <Icon
          size={24}
          className="text-white cursor-pointer transition-colors duration-300 group-hover:text-white"
        />
      </div>
      {notificationCount && (
        <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center transform transition-all duration-300 group-hover:scale-125 group-hover:-translate-y-1">
          {notificationCount}
        </div>
      )}
    </div>
  );
};

export default Navbar;
