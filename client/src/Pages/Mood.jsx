import { useState } from 'react';
import ContentPostingSection from '../components/Mood/ContentPostingSection';
import MoodPost from '../components/Mood/MoodPost';

const Mood = () => {
  // Initializing an array to store multiple content posts
  const [contentData, setContentData] = useState([]);
  
  const [isCreatingPost, setIsCreatingPost] = useState(false);

  // This function will handle the submission of new content
  const handleContentSubmit = (data) => {
    // Adding new content to the existing contentData array
    setContentData((prevData) => [...prevData, data]);
    setIsCreatingPost(false); // Close the post-creation section after submitting
  };

  // Open the post-creation section
  const handleClick = () => {
    setIsCreatingPost(true);
  };

  const handleClickMood=()=>{
    //for rendering previous posts from the backend server
  }

  return (
    <div className={`relative bg-slate-700 min-h-screen ${isCreatingPost ? 'overflow-hidden' : ''}`}>
      <div className="absolute top-4 left-0 right-0 flex justify-center animate-pulse">
        <h1 className="text-yellow-400 text-3xl font-bold">
          Warning: Mood Posting Section Ahead!
        </h1>
      </div>
      <div className='flex justify-between px-8 py-14'>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          type="button"
          onClick={handleClick}
        >
          Create New Post
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          type="button"
          onClick={handleClickMood}
        >
          See Your Mooods
        </button>
        
      </div>

      {/* Content Posting Section */}
      {isCreatingPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="bg-white p-6 w-1/3 rounded shadow-lg z-50">
            <ContentPostingSection onSubmitContent={handleContentSubmit} />
          </div>
          {/* Darken the background */}
          <div className="fixed inset-0 bg-black opacity-50 z-40"></div>
        </div>
      )}

      {/* MoodPost content display */}
      <div className={`${isCreatingPost ? 'filter blur-sm' : ''}`}>
        {/* Loop through contentData array and display each post */}
        {contentData.map((data, index) => (
          <MoodPost key={index} contentData={data} />
        ))}
      </div>
    </div>
  );
};

export default Mood;
