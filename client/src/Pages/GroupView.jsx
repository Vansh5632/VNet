import React from "react";
import { useLocation } from "react-router-dom"; // Import useParams to access URL parameters
import groupData from "../data/groups.json"; // Assuming the JSON file is located here

const GroupView = () => {
  const location = useLocation(); // Get the location object
  const { id } = location.state || {};
  const group = groupData.groups.find((g) => g.id === Number(id)); // Find the group by ID (convert id to number)

  if (!group) {
    return <div>Group not found</div>; // Show this if the group is not found
  }

  return (
    <div className="flex h-screen">
      {/* Main Content */}
      <main className="w-3/4 bg-white dark:bg-gray-900 p-8">
        {/* Topbar */}
        <div id="topbar" className="flex items-center justify-between mb-6">
          <div id="imageLogo" className="w-16 h-16 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
          <div id="Text" className="text-2xl font-bold text-gray-800 dark:text-white">
            {group.title} {/* Display group title */}
          </div>
        </div>

        {/* Group Content */}
        <div id="groupContent">
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
        </div>
      </main>

      {/* Sidebar on the right */}
      <aside className="w-1/4 bg-gray-100 dark:bg-gray-800 p-6">
        <div id="groupDescriptionSidebar" className="text-gray-900 dark:text-white">
          <h2 className="text-xl font-semibold mb-4">Group Description</h2>
          <p>{group.description}</p>
        </div>
      </aside>
    </div>
  );
};

export default GroupView;
