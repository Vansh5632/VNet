import React, { useState, useEffect } from "react";
import { FaBell, FaEnvelope, FaSearch, FaUserCircle } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [notifications, setNotifications] = useState(3);
  const [messages, setMessages] = useState(5);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown')) {
        setIsDropdownOpen(false);
      }
    };
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    //search functionality here
  };

  const handleNotificationClick = () => {
    setNotifications(0);
    // notification view logic here
  };

  const handleMessageClick = () => {
    setMessages(0);
    //message view logic here
  };

  return (
    <div className="w-full fixed top-0 left-0 shadow-lg z-50 bg-gradient-to-r from-[#1ABC9C] to-[#2ECC71]">
      <nav className="flex justify-between items-center p-4 text-white">
        {/* Hamburger Menu for Sidebar */}
        <div className="flex items-center mr-4">
          <RxHamburgerMenu
            className="text-2xl cursor-pointer text-white hover:text-[#16A085] transition duration-300 ease-in-out"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            aria-label="Open sidebar"
          />
        </div>

        {/* Logo */}
        <div className="flex justify-center flex-1 md:flex-none">
          <h1 className="text-xl font-bold">SocialMedia</h1>
        </div>

        {/* Search Bar */}
        <div className="relative hidden md:flex md:flex-1 justify-center px-4">
          <form onSubmit={handleSearch} className="w-full max-w-lg relative">
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 w-full bg-gradient-to-r from-[#34495E] to-[#2C3E50] text-white rounded-full focus:outline-none focus:ring-2 focus:ring-[#3498DB]"
            />
            <button type="submit" className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <FaSearch className="text-[#BDC3C7] hover:text-white transition duration-300 ease-in-out" />
            </button>
          </form>
        </div>

        {/* Right Side Icons */}
        <div className="flex items-center gap-6">
          <div className="relative">
            <FaBell
              className="text-xl hover:text-[#E74C3C] transition duration-300 ease-in-out cursor-pointer"
              onClick={handleNotificationClick}
            />
            {notifications > 0 && (
              <div className="absolute -top-2 -right-2 bg-[#E74C3C] rounded-full w-4 h-4 flex items-center justify-center text-xs">
                {notifications}
              </div>
            )}
          </div>
          <div className="relative">
            <FaEnvelope
              className="text-xl hover:text-[#3498DB] transition duration-300 ease-in-out cursor-pointer"
              onClick={handleMessageClick}
            />
            {messages > 0 && (
              <div className="absolute -top-2 -right-2 bg-[#3498DB] rounded-full w-4 h-4 flex items-center justify-center text-xs">
                {messages}
              </div>
            )}
          </div>
          {/* Profile Icon with Dropdown */}
          <div className="relative dropdown">
            <div 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-10 h-10 rounded-full bg-gradient-to-r from-[#9B59B6] to-[#8E44AD] hover:from-[#8E44AD] hover:to-[#9B59B6] transition duration-300 ease-in-out cursor-pointer flex items-center justify-center"
              aria-label="User menu"
            >
              <FaUserCircle className="text-white text-2xl" />
            </div>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-3 w-48 bg-white text-black rounded-lg shadow-lg overflow-hidden">
                <a href="#" className="block px-4 py-2 hover:bg-[#ECF0F1] transition duration-300 ease-in-out">
                  Profile
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-[#ECF0F1] transition duration-300 ease-in-out">
                  Settings
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-[#ECF0F1] transition duration-300 ease-in-out">
                  Logout
                </a>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Sidebar (Optional, you can implement it as needed) */}
      {isSidebarOpen && (
        <div className="lg:hidden bg-gradient-to-r from-[#34495E] to-[#2C3E50] text-white p-4">
          {/* Sidebar content here */}
        </div>
      )}
    </div>
  );
};

export default Navbar;
