import React from 'react';
import { Heart, Share2 } from 'lucide-react';

const Card = ({ image }) => {
  return (
    <div className="relative group overflow-hidden rounded-xl bg-[#2C3E50] shadow-lg hover:shadow-2xl transition-shadow duration-300">
      {/* Image Section */}
      <div className="relative">
        <img
          src={image.url}
          alt={image.title}
          className="w-full h-64 object-cover rounded-t-xl transition-transform duration-500 group-hover:scale-110"
        />
        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-white font-semibold">{image.title}</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button className="p-2 bg-[#1ABC9C] text-white rounded-full hover:bg-[#2ECC71] shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-110">
          <Heart className="w-5 h-5" />
        </button>
        <button className="p-2 bg-[#3498DB] text-white rounded-full hover:bg-[#9B59B6] shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-110">
          <Share2 className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Card;
