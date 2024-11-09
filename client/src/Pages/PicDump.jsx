import React, { useState } from 'react';
import { ImagePlus } from 'lucide-react';
import Card from '../components/picDump/imageCard';

const PicDump = () => {
  const [images, setImages] = useState([
    { id: 1, url: '/api/placeholder/300/200', title: 'Sample Image 1' },
    { id: 2, url: '/api/placeholder/300/200', title: 'Sample Image 2' },
  ]);

  const handleImageUpload = (e) => {
    const newImage = {
      id: images.length + 1,
      url: '/api/placeholder/300/200',
      title: `New Image ${images.length + 1}`,
    };
    setImages([...images, newImage]);
  };

  return (
    <div className="min-h-screen bg-[#1C1C1C] p-8 text-white">
      {/* Upload Section */}
      <div className="mb-12 text-center">
        <label className="cursor-pointer inline-block">
          <input
            type="file"
            className="hidden"
            accept="image/*"
            onChange={handleImageUpload}
          />
          <div className="flex flex-col items-center gap-3 p-6 border-2 border-dashed border-[#9B59B6] rounded-lg hover:bg-[#34495E] transition-colors duration-300">
            <ImagePlus className="w-12 h-12 text-[#3498DB]" />
            <span className="text-lg font-semibold text-[#FFFFFF]">
              Click to upload image
            </span>
          </div>
        </label>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((image) => (
          <Card key={image.id} image={image} />
        ))}
      </div>
    </div>
  );
};

export default PicDump;
