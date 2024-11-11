import React, { useState } from 'react';
import blackimage from '../assets/photo-1550684376-efcbd6e3f031.jpeg';
import logo from '../assets/logo.svg'; // Make sure the path to your SVG logo is correct

const SignIn = () => {
  const [formData, setFormData] = useState({
    userCredential: '',
    password: '',
  });
  const { userCredential, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting form data', formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-emerald-600 via-turquoise to-sky-600">
      <div className="bg-white flex rounded-lg shadow-lg overflow-hidden w-full max-w-4xl mx-4 sm:mx-0">
        {/* Image Section with Overlayed Logo */}
        <div className="relative hidden sm:flex w-1/2">
          {/* SVG Logo above the image */}
          <div className="absolute inset-0 flex justify-center items-center z-10">
            <img
              src={logo}
              alt="Logo"
              className="w-36 h-36" // Adjust size as needed
            />
          </div>
          {/* Background Image */}
          <img
            src={blackimage}
            alt="Sign In"
            className="object-cover h-full w-full"
          />
        </div>

        {/* Form Section */}
        <div className="w-full sm:w-1/2 p-8">
          <h2 className="text-2xl font-bold text-purple-600 text-center mb-6">Welcome Back</h2>
          <form onSubmit={onSubmit}>
            <div className="mb-4">
              <label htmlFor="userCredential" className="block text-sm font-medium text-slate-700 mb-1">
                Username or Email
              </label>
              <input
                type="text"
                id="userCredential"
                name="userCredential"
                value={userCredential}
                onChange={onChange}
                placeholder="Enter your username or email"
                className="w-full px-3 py-2 border border-sky-500 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={onChange}
                placeholder="Password"
                className="w-full px-3 py-2 border border-sky-500 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-emerald-500 text-white py-2 px-4 rounded-md hover:bg-teal-500 transition duration-300 ease-in-out font-medium"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
