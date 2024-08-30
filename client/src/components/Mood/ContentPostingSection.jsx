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
    <div className="w-full max-w-md mx-auto bg-gray-800 text-white p-6 rounded-lg shadow-lg">
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-blue-400">Post Your Content</h2>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-green-400">
            Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 w-full px-3 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="mood" className="block text-sm font-medium text-green-400">
            Mood
          </label>
          <select
            id="mood"
            value={mood}
            onChange={(e) => setMood(e.target.value)}
            className="mt-1 w-full px-3 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring focus:ring-blue-500"
            required
          >
            <option value="" disabled>Select mood</option>
            <option value="happy">Happy</option>
            <option value="sad">Sad</option>
            <option value="excited">Excited</option>
            <option value="calm">Calm</option>
          </select>
        </div>
        <div>
          <label htmlFor="content" className="block text-sm font-medium text-green-400">
            Content
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="mt-1 w-full px-3 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring focus:ring-blue-500"
            rows={5}
            required
          />
        </div>
        <button
          type="submit"
          className={`w-full py-2 px-4 rounded focus:outline-none focus:ring focus:ring-green-300 transition-all duration-300 overflow-hidden ${
            isSubmitting ? 'btn-sliding' : 'bg-green-500 hover:bg-green-600'
          }`}
          disabled={isSubmitting}
        >
          <span className={isSubmitting ? 'invisible' : ''}>Post Content</span>
          {isSubmitting && <div className="sliding-bar"></div>}
        </button>
      </form>
    </div>
  );
};

export default ContentPostingSection;
