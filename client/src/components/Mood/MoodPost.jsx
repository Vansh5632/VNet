import React from 'react';

const MoodPost = ({ contentData }) => {
  const { title, mood, content } = contentData;

  return (
    <div className="w-full max-w-md mx-auto bg-gray-800 text-white p-6 mt-6 rounded-lg shadow-lg">
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-blue-400">Your Content</h2>
      </div>
      <div className="space-y-2">
        <p className="text-lg font-semibold text-green-400">Title: {title}</p>
        <p className="text-lg font-semibold text-green-400">Mood: {mood}</p>
        <p className="text-base text-gray-300">Content: {content}</p>
      </div>
    </div>
  );
};

export default MoodPost;
