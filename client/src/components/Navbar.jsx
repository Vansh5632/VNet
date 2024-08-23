import React, { useState } from "react";
import { FaSearch, FaUserCircle, FaEnvelope, FaBell, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearch = () => {
    console.log("Searching for:", searchTerm);
  };

  return (
    <div className="bg-gray-800 p-4">
      <div className="flex items-center justify-between bg-gradient-to-r from-emerald-500 to-turquoise-500 w-full max-w-6xl mx-auto p-3 rounded-lg shadow-lg transition-all duration-500 ease-in-out hover:shadow-2xl">
        
        {/* Search Icon / Search Bar */}
        <div className="flex items-center flex-grow">
          {!isSearchOpen ? (
            <div
              className="text-white cursor-pointer transition-all duration-500 ease-in-out transform hover:text-emerald-300 hover:scale-125 hover:rotate-6"
              onClick={() => setIsSearchOpen(true)}
            >
              <FaSearch size={24} />
            </div>
          ) : (
            <div className={`flex items-center bg-white rounded-full px-2 shadow-inner w-full max-w-md mx-4 transition-all duration-500 ease-in-out transform ${
              isSearchFocused ? "ring-2 ring-emerald-500" : ""
            }`}>
              {/* Back / Close Icon */}
              <div
                className="text-gray-500 cursor-pointer transition-all duration-500 ease-in-out transform hover:text-red-500 hover:scale-110 hover:rotate-12"
                onClick={() => setIsSearchOpen(false)}
              >
                <FaTimes size={20} />
              </div>
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
                className="text-emerald-500 p-2 rounded-r-full transition-all duration-500 ease-in-out transform hover:text-turquoise-500 hover:bg-emerald-100 hover:scale-110 hover:shadow-lg hover:-rotate-12"
                onClick={handleSearch}
              >
                <FaSearch />
              </button>
            </div>
          )}
        </div>

        {/* User Icons */}
        <div className={`flex items-center space-x-4 transition-all duration-500 ease-in-out transform ${isSearchOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`}>
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
      <div className="bg-gray-800 p-2 rounded-full shadow-md transition-all duration-500 ease-in-out transform group-hover:bg-emerald-500 group-hover:scale-125 group-hover:shadow-xl group-hover:-rotate-12">
        <Icon
          size={24}
          className="text-white cursor-pointer transition-colors duration-500 ease-in-out group-hover:text-white"
        />
      </div>
      {notificationCount && (
        <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center transform transition-all duration-500 ease-in-out group-hover:scale-125 group-hover:-translate-y-1">
          {notificationCount}
        </div>
      )}
    </div>
  );
};

export default Navbar;
