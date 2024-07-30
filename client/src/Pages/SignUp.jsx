import React from 'react';

const SignUp = () => {
  return (
    <div className="relative flex justify-center items-center min-h-screen bg-gradient-to-r from-emerald-600 via-turquoise to-sky-600">
      
      
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md relative z-10 mx-4 sm:mx-0">
        <h2 className="text-2xl font-bold text-purple-600 text-center mb-6">Join Us Today</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="Username" className="block text-sm font-medium text-slate-700 mb-1">Username</label>
            <input 
              type="text" 
              id="Username"
              placeholder="Choose something cool"
              className="w-full px-3 py-2 border border-sky-500 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="Email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
            <input 
              type="email" 
              id="Email"
              placeholder="Enter Email"
              className="w-full px-3 py-2 border border-sky-500 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-1">Password</label>
            <input 
              type="password" 
              id="password"
              placeholder="Password"
              className="w-full px-3 py-2 border border-sky-500 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <button 
            type="submit"
            className="w-full bg-emerald-500 text-white py-2 px-4 rounded-md hover:bg-teal-500 transition duration-300 ease-in-out font-medium"
          >
            Let's Begin
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
