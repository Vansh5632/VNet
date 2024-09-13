import React, { useState } from 'react';
import '../../CustomCss/ContentPostingSection.css'; // Custom styles here

const ContentPostingSection = ({ onSubmitContent }) => {
  const [title, setTitle] = useState('');
  const [mood, setMood] = useState('');
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate a network request
    setTimeout(() => {
      const data = { title, mood, content };
      onSubmitContent(data); // Pass data to parent component
      setTitle('');
      setMood('');
      setContent('');
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <div className="w-full  mx-auto bg-gradient-to-b from-gray-800 to-gray-900 text-white p-8 rounded-lg shadow-xl transform transition-transform duration-300 hover:scale-105">
      <div className="mb-6">
        <h2 className="text-3xl font-semibold text-blue-400 text-center">Create a Post</h2>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="relative">
          <label htmlFor="title" className="block text-sm font-medium text-gray-300 mb-1">
            Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow duration-300"
            required
          />
        </div>
        <div className="relative">
          <label htmlFor="mood" className="block text-sm font-medium text-gray-300 mb-1">
            Mood
          </label>
          <select
            id="mood"
            value={mood}
            onChange={(e) => setMood(e.target.value)}
            className="mt-1 w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow duration-300"
            required
          >
            <option value="" disabled>Select mood</option>
            <option value="happy">Happy</option>
            <option value="sad">Sad</option>
            <option value="excited">Excited</option>
            <option value="calm">Calm</option>
          </select>
        </div>
        <div className="relative">
          <label htmlFor="content" className="block text-sm font-medium text-gray-300 mb-1">
            Content
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="mt-1 w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow duration-300"
            rows={5}
            required
          />
        </div>
        <button
          type="submit"
          className={`w-full py-3 px-6 rounded-lg font-semibold text-lg focus:outline-none focus:ring-2 focus:ring-green-300 transition-all duration-300 overflow-hidden relative ${
            isSubmitting ? 'bg-green-700 cursor-not-allowed' : 'bg-green-500 hover:bg-green-600'
          }`}
          disabled={isSubmitting}
        >
          <span className={isSubmitting ? 'invisible' : ''}>Post Content</span>
          {isSubmitting && (
            <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center">
              <div className="sliding-bar"></div>
            </div>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContentPostingSection;
