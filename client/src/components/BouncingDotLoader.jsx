// BouncingEmojiLoader.jsx
import React from 'react';

const emojis = ['😀', '😂', '😍', '🥳', '😎', '🤔', '😜', '😢'];

const getRandomEmoji = () => {
  const randomIndex = Math.floor(Math.random() * emojis.length);
  return emojis[randomIndex];
};

const BouncingEmojiLoader = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-[#34495E]">
      <div className="relative flex space-x-4">
        <div className="text-4xl animate-bounce animation-delay-0">{getRandomEmoji()}</div>
        <div className="text-4xl animate-bounce animation-delay-200">{getRandomEmoji()}</div>
        <div className="text-4xl animate-bounce animation-delay-400">{getRandomEmoji()}</div>
      </div>
    </div>
  );
};

export default BouncingEmojiLoader;
