import { useState } from 'react';
import ContentPostingSection from '../components/Mood/ContentPostingSection';
import MoodPost from '../components/Mood/MoodPost';

const Mood = () => {
  const [contentData, setContentData] = useState([]);
  const [isCreatingPost, setIsCreatingPost] = useState(false);

  const handleContentSubmit = (data) => {
    setContentData((prevData) => [...prevData, data]);
    setIsCreatingPost(false);
  };

  const handleClick = () => {
    setIsCreatingPost(true);
  };

  const handleClickMood = () => {
    // For rendering previous posts from the backend server
  };

  const handleback = () => {
    setIsCreatingPost(false);
  };

  return (
    <div className={`relative bg-gradient-to-br from-[#A7E6D9] via-[#A3D9A1] to-[#B2E0F8] min-h-screen ${isCreatingPost ? 'overflow-hidden' : ''}`}>
      {/* Warning Banner */}
      <div className="absolute top-4 left-0 right-0 flex justify-center animate-pulse px-4">
        <h1 className="text-yellow-400 text-xl md:text-3xl font-bold text-center">
          Warning: Mood Posting Section Ahead!
        </h1>
      </div>

      {/* Buttons for creating and viewing moods */}
      <div className='flex flex-col md:flex-row justify-center md:justify-between items-center md:px-8 py-16 gap-4 md:gap-8'>
        <button
          className="bg-blue-500 text-white px-6 py-3 rounded-lg w-full md:w-auto md:px-8"
          type="button"
          onClick={handleClick}
        >
          Create New Post
        </button>
        <button
          className="bg-blue-500 text-white px-6 py-3 rounded-lg w-full md:w-auto md:px-8"
          type="button"
          onClick={handleClickMood}
        >
          See Your Moods
        </button>
      </div>

      {/* Content Posting Section Modal */}
      {isCreatingPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div className="bg-white p-6 w-full md:w-2/3 lg:w-1/3 rounded-lg shadow-lg z-50">
            <ContentPostingSection onSubmitContent={handleContentSubmit} onBack={handleback} />
          </div>
          <div className="fixed inset-0 bg-black opacity-50 z-40"></div>
        </div>
      )}

      {/* Posts Section */}
      <div className={`px-4 md:px-8 py-6 ${isCreatingPost ? 'filter blur-sm' : ''}`}>
        {contentData.length === 0 ? (
          <p className="text-white text-center">No posts yet. Create a new mood post to get started!</p>
        ) : (
          contentData.map((data, index) => (
            <MoodPost key={index} contentData={data} />
          ))
        )}
      </div>
    </div>
  );
};

export default Mood;
