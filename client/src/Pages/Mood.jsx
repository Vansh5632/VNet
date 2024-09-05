import React, { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { IoArrowBack } from 'react-icons/io5'; // For back arrow icon
import ContentPostingSection from '../components/Mood/ContentPostingSection';
import MoodPost from '../components/Mood/MoodPost';
import "../CustomCss/mood.css"
const Mood = () => {
  const [contentData, setContentData] = useState({
    title: '',
    mood: '',
    content: ''
  });

  const [isPostingSectionVisible, setIsPostingSectionVisible] = useState(false);

  const handleContentSubmit = (data) => {
    setContentData(data);
    setIsPostingSectionVisible(false); // Hide section after posting
  };

  const togglePostingSection = () => {
    setIsPostingSectionVisible(!isPostingSectionVisible);
  };

  return (
    <div className='bg-slate-700 min-h-screen p-4 relative'>
      <div className="flex justify-end mb-4">
        <button
          onClick={togglePostingSection}
          className="text-white bg-blue-500 p-2 rounded-full hover:bg-blue-600 transition"
        >
          <AiOutlinePlus size={24} />
        </button>
      </div>

      {/* Full-screen overlay for the ContentPostingSection */}
      {isPostingSectionVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-lg shadow-lg relative animate-slide-up">
            <button
              onClick={togglePostingSection}
              className="absolute top-4 left-4 text-gray-600 hover:text-gray-800 transition"
            >
              <IoArrowBack size={24} />
            </button>
            <ContentPostingSection onSubmitContent={handleContentSubmit} />
          </div>
        </div>
      )}

      {/* Disable other content when overlay is visible */}
      {!isPostingSectionVisible && (
        <MoodPost contentData={contentData} />
      )}
    </div>
  );
};

export default Mood;
