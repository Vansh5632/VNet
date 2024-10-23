import React, { useState } from 'react';
import Navbar from './Navbar';
import SideBar from './SideBar';
import { Outlet } from 'react-router-dom';

const LayoutProfile = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <div className={`flex h-screen ${isProfileOpen ? 'backdrop-blur' : ''}`}>
      <div className="hidden lg:block w-64">
        <SideBar />
      </div>
      <div className="flex flex-col flex-1">
        <Navbar />
        <main className="flex-1 overflow-auto">
          {/* Pass down the state and setter to the Outlet's child components */}
          <Outlet context={{ isProfileOpen, setIsProfileOpen }} />
        </main>
      </div>
      <div className="lg:hidden fixed bottom-0 left-0 right-0">
        <SideBar />
      </div>
    </div>
  );
};

export default LayoutProfile;
