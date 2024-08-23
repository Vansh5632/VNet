import React from 'react';
import Navbar from './Navbar';
import SideBar from './SideBar';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <div className="hidden lg:block">
          <SideBar />
        </div>
        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </div>
      <div className="lg:hidden">
        <SideBar />
      </div>
    </div>
  );
};

export default Layout;
