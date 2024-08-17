import React, { useState } from "react";
import { SiGooglehome } from "react-icons/si";
import { MdOutlineGroups } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { BsEmojiSmile } from "react-icons/bs";
import { BsImages } from 'react-icons/bs';
import Logo from '../assets/logo.svg'

const SideBar = () => {
  const [activeIcon, setActiveIcon] = useState("Home");

  const icons = [
    {
      icon: <SiGooglehome />,
      name: "Home",
      hoverBg: "bg-emerald-500",
      activeBg: "bg-emerald-600",
      textColor: "text-emerald-500",
    },
    {
      icon: <MdOutlineGroups />,
      name: "Community",
      hoverBg: "bg-orange-500",  
      activeBg: "bg-orange-600", 
      textColor: "text-orange-500",
    },
    {
      icon: <IoSettings />,
      name: "Settings",
      hoverBg: "bg-sky-500",
      activeBg: "bg-sky-600",
      textColor: "text-sky-500",
    },
    {
      icon: <BsEmojiSmile />,
      name: "Mood",
      hoverBg: "bg-rose-500",
      activeBg: "bg-rose-600",
      textColor: "text-rose-500",
    },
    {
      icon: <BsImages />,
      name: "Pic Dump",
      hoverBg: "bg-purple-500",
      activeBg: "bg-purple-600",
      textColor: "text-purple-500",
    },
  ];

  return (
    <div className="w-2/12 h-screen bg-gray-800 text-white p-6 font-sans">
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
                <button
                  onClick={() => setActiveIcon(item.name)}
                  className={`w-full flex items-center p-4 rounded-lg transition-all duration-300 ${
                    activeIcon === item.name
                      ? `${item.activeBg} text-white shadow-lg transform scale-105`
                      : `hover:${item.hoverBg} hover:text-white`
                  }`}
                >
                  <span className={`text-3xl mr-4 ${activeIcon !== item.name ? item.textColor : ''}`}>
                    {item.icon}
                  </span>
                  <span className="text-lg font-semibold">
                    {item.name}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-auto">
          <button className="w-full bg-gradient-to-r from-emerald-500 to-turquoise-500 hover:from-turquoise-500 hover:to-emerald-500 text-white py-3 px-4 rounded-lg transition-all duration-300 font-bold text-lg transform hover:scale-105">
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
