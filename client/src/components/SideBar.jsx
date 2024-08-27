import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SiGooglehome } from "react-icons/si";
import { MdOutlineGroups } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { BsEmojiSmile, BsImages } from 'react-icons/bs';
import Logo from '../assets/logo.svg';

const SideBar = () => {
  const [activeIcon, setActiveIcon] = useState("Home");
  const navigate = useNavigate(); // Use the useNavigate hook

  const icons = [
    {
      icon: <SiGooglehome />,
      name: "Home",
      route: "/home",
      hoverBg: "bg-emerald-500",
      activeBg: "bg-emerald-600",
      textColor: "text-emerald-500",
    },
    {
      icon: <MdOutlineGroups />,
      name: "Community",
      route: "/community",
      hoverBg: "bg-orange-500",
      activeBg: "bg-orange-600",
      textColor: "text-orange-500",
    },
    {
      icon: <BsEmojiSmile />,
      name: "Mood",
      route: "/mood",
      hoverBg: "bg-rose-500",
      activeBg: "bg-rose-600",
      textColor: "text-rose-500",
    },
    {
      icon: <BsImages />,
      name: "Pic Dump",
      route: "/picdump",
      hoverBg: "bg-purple-500",
      activeBg: "bg-purple-600",
      textColor: "text-purple-500",
    },
    {
      icon: <IoSettings />,
      name: "Settings",
      route: "/settings",
      hoverBg: "bg-sky-500",
      activeBg: "bg-sky-600",
      textColor: "text-sky-500",
    },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:flex lg:flex-col lg:w-[100%] h-screen bg-gray-800 text-white p-6 font-sans">
        <div className="flex flex-col h-full">
          <img
            src={Logo}
            alt="Vibe Check Logo"
            className="w-40 h-auto mb-10"
          />
          <nav className="flex-grow">
            <ul className="space-y-6">
              {icons.map((item) => (
                <li key={item.name}>
                  <div
                    onClick={() => {
                      setActiveIcon(item.name);
                      navigate(item.route); // Use useNavigate to navigate
                    }}
                    className={`w-full flex items-center p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                      activeIcon === item.name
                        ? `${item.activeBg} text-white shadow-lg transform scale-105`
                        : `text-gray-400`
                    }`}
                  >
                    <span className={`text-3xl mr-4 ${activeIcon !== item.name ? item.textColor : ''}`}>
                      {item.icon}
                    </span>
                    <span className="text-lg font-semibold">
                      {item.name}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-2">
            <button className="w-full bg-gradient-to-r from-emerald-500 to-turquoise-500 hover:from-turquoise-500 hover:to-emerald-500 text-white py-3 px-4 rounded-lg transition-all duration-300 font-bold text-lg transform hover:scale-105">
              Log Out
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Navbar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-2 font-sans">
        <nav>
          <ul className="flex justify-around items-center">
            {icons.map((item) => (
              <li key={item.name}>
                <div
                  onClick={() => {
                    setActiveIcon(item.name);
                    navigate(item.route); // Use useNavigate to navigate
                  }}
                  className={`flex flex-col items-center p-2 rounded-lg cursor-pointer transition-all duration-300 ${
                    activeIcon === item.name
                      ? `${item.activeBg} text-white`
                      : `hover:${item.hoverBg} hover:text-white`
                  }`}
                >
                  <span className={`text-2xl ${activeIcon !== item.name ? item.textColor : ''}`}>
                    {item.icon}
                  </span>
                  <span className="text-xs mt-1">
                    {item.name}
                  </span>
                </div>
              </li>
            ))}
            {/* Logout button for mobile */}
            <li>
              <button className="flex flex-col items-center p-2 rounded-lg transition-all duration-300 bg-gradient-to-r from-emerald-500 to-turquoise-500 hover:from-turquoise-500 hover:to-emerald-500 text-white">
                <span className="text-2xl">
                  <BsEmojiSmile />
                </span>
                <span className="text-xs mt-1">
                  Log Out
                </span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default SideBar;
