import React, { useState } from 'react';

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const { username, email, password } = formData;

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
        {/* Image Section */}
        <div className="hidden sm:block w-1/2">
          <img
            src="https://images.unsplash.com/photo-1550684376-efcbd6e3f031"
            alt="Sign Up"
            className="object-cover h-full"
          />
        </div>
        {/* Form Section */}
        <div className="w-full sm:w-1/2 p-8">
          <h2 className="text-2xl font-bold text-purple-600 text-center mb-6">Join Us Today</h2>
          <form onSubmit={onSubmit}>
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-medium text-slate-700 mb-1">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={onChange}
                placeholder="Choose something cool"
                className="w-full px-3 py-2 border border-sky-500 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={onChange}
                placeholder="Enter Email"
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
              Let's Begin
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;