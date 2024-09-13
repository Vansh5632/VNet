import React, { useState } from 'react';
import PropTypes from 'prop-types';
import profile from '../../assets/profile.png';

const MoodPost = ({ contentData }) => {
  const { title, mood, content } = contentData;

  // States for like count, comments, and comment visibility
  const [likes, setLikes] = useState(0);
  const [liked,setLiked] = useState(false);
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false); // Toggle to show/hide comments

  // Handlers for liking and adding a comment
  const handleLike = () => {
    if(liked){
      setLikes(likes);
    }
    else{
      setLikes(likes + 1);
      setLiked(true)
    }
  };

  const handleAddComment = (e) => {
    e.preventDefault();
    const commentText = e.target.comment.value;
    if (commentText.trim()) {
      setComments([...comments, commentText]);
      e.target.comment.value = ''; // Clear the input field
    }
  };

  const handleToggleComments = () => {
    setShowComments(!showComments); // Toggle comment section visibility
  };

  return (
    <div className="relative w-full max-w-md mx-auto bg-gray-800 text-white p-6 mt-6 rounded-lg shadow-lg">
      {/* Profile image container */}
      <div className="absolute -top-6 left-6 w-16 h-16 rounded-full overflow-hidden border-4 border-gray-800 bg-gray-200">
        <img src={profile} alt="profile image" className="w-full h-full object-cover" />
      </div>

      {/* Content Section */}
      <div className="pt-10">
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-blue-400">Username</h2>
        </div>
        <div className="space-y-2">
          <p className="text-lg font-semibold text-green-400">Title: {title}</p>
          <p className="text-lg font-semibold text-green-400">Mood: {mood}</p>
          <p className="text-base text-gray-300">Content: {content}</p>
        </div>
      </div>

      {/* Like and Comment Section */}
      <div className="flex justify-between items-center mt-4">
        {/* Like Button */}
        <button
          onClick={handleLike}
          className="flex items-center space-x-2 text-blue-500 hover:text-blue-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M3.172 5.172a4 4 0 015.656 0l.672.672.672-.672a4 4 0 115.656 5.656l-6.328 6.328a1 1 0 01-1.414 0L3.172 10.83a4 4 0 010-5.656z" />
          </svg>
          <span>{likes} Likes</span>
        </button>

        {/* Comment Button */}
        <button
          className="text-green-500 hover:text-green-400"
          onClick={handleToggleComments}
        >
          {showComments ? 'Hide Comments' : 'Comment'}
        </button>
      </div>

      {/* Comment Section - Show when "Comment" button is clicked */}
      {showComments && (
        <div className="mt-4">
          {/* Comment Input Section */}
          <form onSubmit={handleAddComment} className="space-y-2">
            <input
              type="text"
              name="comment"
              placeholder="Add a comment..."
              className="w-full p-2 rounded bg-gray-700 text-white"
            />
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600"
            >
              Submit
            </button>
          </form>

          {/* Display Comments */}
          {comments.length > 0 ? (
            <div className="mt-4 space-y-2">
              {comments.map((comment, index) => (
                <div
                  key={index}
                  className="p-2 bg-gray-700 rounded text-sm text-gray-300"
                >
                  {comment}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-400 mt-2">No comments yet. Be the first to comment!</p>
          )}
        </div>
      )}
    </div>
  );
};
MoodPost.propTypes = {
  contentData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    mood: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};

export default MoodPost;

