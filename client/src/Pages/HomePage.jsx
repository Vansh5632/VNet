import React from 'react'
import Navbar from '../components/Navbar'
import SideBar from '../components/SideBar'

const HomePage = () => {
  return (
    <div className='flex h-screen bg-gradient-to-r from-emerald-500 via-turquoise-500 to-sky-blue-500'>
      <SideBar />
      <div className='flex-1 flex flex-col'>
        <Navbar />
        <main className='flex-1 p-6 overflow-auto'>
          {/* Main content goes here */}
          <h1 className='text-4xl font-bold text-white mb-4'>Welcome to Vibe Check</h1>
          <p className='text-white text-lg'>Your daily dose of good vibes and awesome content!</p>
        </main>
      </div>
    </div>
  )
}

export default HomePage