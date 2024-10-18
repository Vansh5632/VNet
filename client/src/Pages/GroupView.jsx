import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import groupData from "../data/groups.json";

const GroupView = () => {
  const location = useLocation();
  const { id } = location.state || {};
  const group = groupData.groups.find((g) => g.id === Number(id));

  // Chat messages state
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  // Dropdown state for group description
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      setMessages([...messages, { content: newMessage, sender: "You", timestamp: new Date() }]);
      setNewMessage(""); // Clear the input field
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  if (!group) {
    return <div>Group not found</div>;
  }

  return (
    <div className="flex flex-col h-screen">
      {/* Topbar */}
      <div id="topbar" className="flex items-center justify-between bg-white dark:bg-gray-900 p-4 shadow-md">
        <div id="imageLogo" className="w-12 h-12 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
        <div id="Text" className="text-2xl font-bold text-gray-800 dark:text-white">
          {group.title}
        </div>
        {/* Dropdown for group description */}
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="text-gray-800 dark:text-white font-semibold focus:outline-none"
          >
            Description
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-lg shadow-lg p-4 z-50">
              <h2 className="text-xl font-semibold mb-2">Group Description</h2>
              <p>{group.description}</p>
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 bg-white dark:bg-gray-900 p-6">
        {/* Group Content */}
        {/* <div id="groupContent">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Group Activities</h2>
          <p className="text-gray-700 dark:text-gray-300">{group.description}</p>

          <div className="mt-6">
            <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg mb-4">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Recent Post</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">{group.recentPost || "No recent posts available."}</p>
            </div>
            <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Upcoming Event</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">{group.upcomingEvent || "No upcoming events."}</p>
            </div>
          </div>
        </div> */}

        {/* Chat Section */}
        <div id="chatSection" className="mt-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Group Chat</h2>
          <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg mb-4 h-64 overflow-y-scroll">
            {messages.length === 0 ? (
              <p className="text-gray-600 dark:text-gray-300">No messages yet. Start the conversation!</p>
            ) : (
              messages.map((message, index) => (
                <div key={index} className="mb-4">
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {message.sender} • {message.timestamp.toLocaleTimeString()}
                  </div>
                  <div className="text-gray-800 dark:text-white">{message.content}</div>
                </div>
              ))
            )}
          </div>
          <div className="flex">
            <input
              type="text"
              className="flex-1 p-2 bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-white rounded-l-lg"
              placeholder="Type your message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <button
              className="p-2 bg-blue-500 text-white rounded-r-lg"
              onClick={handleSendMessage}
            >
              Send
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default GroupView;
