import React from 'react';
import Navbar from '../components/Navbar';
import SideBar from '../components/SideBar';
import InfiniteScroll from '../components/InfiniteScroll';

const HomePage = () => {
  return (
    <div className="flex flex-col h-screen bg-slate-700">
      
      <div className="flex flex-1 overflow-hidden">
       
        <main className="flex-1 sm:p-6 overflow-auto pb-16 lg:pb-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2 sm:mb-4">Welcome to Vibe Check</h1>
          <p className="text-white text-base sm:text-lg mb-4 sm:mb-8">Your daily dose of good vibes and awesome content!</p>
          
          {/* Today's Vibe Section */}
          <section className="bg-white rounded-lg shadow-lg p-4 sm:p-6 mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-amethyst-600 mb-3 sm:mb-4">Today's Vibe</h2>
            <div className="flex flex-wrap gap-2 sm:gap-4">
              <button className="bg-emerald-400 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-sm sm:text-base hover:bg-emerald-500 transition">
                😊 Happy
              </button>
              <button className="bg-sky-400 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-sm sm:text-base hover:bg-sky-500 transition">
                😎 Chill
              </button>
              <button className="bg-[#9B59B6] text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-sm sm:text-base hover:bg-amethyst-500 transition">
                🤔 Curious
              </button>
              <button className="bg-[#4A5568] text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-sm sm:text-base hover:bg-dark-slate-500 transition">
                😴 Sleepy
              </button>
            </div>
          </section>
          
          {/* Infinite Scroll Image Section */}
          <InfiniteScroll />
        </main>
      </div>
      <div className="lg:hidden">
        <SideBar />
      </div>
    </div>
  );
};

export default HomePage;