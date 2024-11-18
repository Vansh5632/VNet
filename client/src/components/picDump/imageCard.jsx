import React, { useState } from 'react';
import { Heart, Share2, MessageCircle, BookmarkPlus } from 'lucide-react';

const Card = ({ image }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  return (
    <div className="relative group w-80">
      {/* Main Card Container */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 shadow-xl transition-all duration-300 hover:-translate-y-2">
        {/* Image Container */}
        <div className="relative h-96">
          <img
            src={image.url}
            alt={image.title}
            className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Category Tag */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 text-xs font-medium text-white bg-blue-500/80 backdrop-blur-sm rounded-full">
              {image.category || 'Photography'}
            </span>
          </div>

          {/* Interactive Icons */}
          <div className="absolute top-4 right-4 flex flex-col gap-2 transform translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
            <button 
              onClick={() => setIsLiked(!isLiked)}
              className="p-2 backdrop-blur-md bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300"
            >
              <Heart 
                className={`w-5 h-5 transition-colors duration-300 ${
                  isLiked ? 'text-red-500 fill-red-500' : 'text-white'
                }`}
              />
            </button>
            <button className="p-2 backdrop-blur-md bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300">
              <MessageCircle className="w-5 h-5 text-white" />
            </button>
            <button className="p-2 backdrop-blur-md bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300">
              <Share2 className="w-5 h-5 text-white" />
            </button>
            <button 
              onClick={() => setIsSaved(!isSaved)}
              className="p-2 backdrop-blur-md bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300"
            >
              <BookmarkPlus 
                className={`w-5 h-5 transition-colors duration-300 ${
                  isSaved ? 'text-yellow-400 fill-yellow-400' : 'text-white'
                }`}
              />
            </button>
          </div>
        </div>

        {/* Content Section */}
        <div className="relative p-5">
          {/* Title and Description */}
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
              {image.title}
            </h3>
            <p className="text-sm text-gray-400 line-clamp-2">
              {image.description || 'Discover the beauty captured in this moment. Every pixel tells a story waiting to be explored.'}
            </p>
          </div>

          {/* Stats and Meta */}
          <div className="mt-4 flex items-center justify-between text-sm text-gray-400">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <Heart className="w-4 h-4" />
                {image.likes || '2.4k'}
              </span>
              <span className="flex items-center gap-1">
                <MessageCircle className="w-4 h-4" />
                {image.comments || '88'}
              </span>
            </div>
            <span className="text-xs">
              {image.date || '2 hours ago'}
            </span>
          </div>
        </div>

        {/* Interactive Highlight Border */}
        <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-500/50 transition-colors duration-300" />
      </div>
    </div>
  );
};

export default Card;