import React, { useState, useEffect, useRef } from 'react';
import { AiOutlineHeart, AiOutlineShareAlt, AiOutlineDownload } from 'react-icons/ai';

const InfiniteScroll = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [liked, setLiked] = useState([]); // Track likes per image
  const loader = useRef(null);

  useEffect(() => {
    loadMoreImages();
  }, []);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '20px',
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(handleObserver, options);
    if (loader.current) {
      observer.observe(loader.current);
    }

    return () => {
      if (loader.current) {
        observer.unobserve(loader.current);
      }
    };
  }, [images]);

  const handleObserver = (entities) => {
    const target = entities[0];
    if (target.isIntersecting) {
      loadMoreImages();
    }
  };

  const loadMoreImages = () => {
    setLoading(true);
    const newImages = Array.from({ length: 10 }, (_, index) => ({
      id: images.length + index + 1,
      url: `https://picsum.photos/500/300?random=${images.length + index + 1}`,
      username: `User ${images.length + index + 1}`, // Add username
      likes: 0,
    }));

    setTimeout(() => {
      setImages((prev) => [...prev, ...newImages]);
      setLiked((prev) => [...prev, ...Array(newImages.length).fill(false)]); // Initialize liked state
      setLoading(false);
    }, 1000);
  };

  const increaseLikes = (index) => {
    if (!liked[index]) {
      const updatedImages = [...images];
      updatedImages[index].likes += 1;
      setImages(updatedImages);
      const updatedLiked = [...liked];
      updatedLiked[index] = true; // Mark this image as liked
      setLiked(updatedLiked);
    }
  };

  return (
    <section className="flex justify-center bg-darkGray-900 py-4 sm:py-6 md:py-8 lg:py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 max-w-5xl w-full px-2 sm:px-4">
        {images.map((image, index) => (
          <div
            key={image.id}
            className="bg-darkGray-800 rounded-lg sm:rounded-xl lg:rounded-2xl shadow-md sm:shadow-lg lg:shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 ease-in-out"
          >
            <img 
              src={image.url} 
              alt={`Image ${image.id}`} 
              className="w-full h-48 sm:h-56 lg:h-64 object-cover rounded-t-lg sm:rounded-t-xl lg:rounded-t-2xl" 
              loading="lazy"
            />
            <div className="p-3 sm:p-4 rounded-b-lg sm:rounded-b-xl lg:rounded-b-2xl bg-gradient-to-r from-emerald-600 to-turquoise-600">
              <p className="text-white text-sm sm:text-base font-semibold">{image.username}</p> {/* Display Username */}
              <div className="flex justify-around mt-3 space-x-4">
                {/* Like Button */}
                <button
                  className={`flex items-center justify-center text-white ${liked[index] ? 'text-pink-400' : 'hover:text-pink-400'} transform transition-all duration-300 ease-in-out hover:scale-110`}
                  onClick={() => increaseLikes(index)}
                  disabled={liked[index]} // Disable if already liked
                >
                  <AiOutlineHeart className="w-6 h-6" />
                  <span className="ml-1">Like</span>
                  <span className="ml-2 text-sm">{image.likes}</span>
                </button>

                {/* Share Button */}
                <button
                  className="flex items-center justify-center text-white hover:text-blue-400 transform transition-all duration-300 ease-in-out hover:scale-110"
                  onClick={() => console.log(`Shared: ${image.url}`)}
                >
                  <AiOutlineShareAlt className="w-6 h-6" />
                  <span className="ml-1">Share</span>
                </button>

                {/* Download Button */}
                <button
                  className="flex items-center justify-center text-white hover:text-green-400 transform transition-all duration-300 ease-in-out hover:scale-110"
                  onClick={() => window.open(image.url, '_blank')}
                >
                  <AiOutlineDownload className="w-6 h-6" />
                  <span className="ml-1">Download</span>
                </button>
              </div>
            </div>
          </div>
        ))}
        {loading && (
          <div className="col-span-full flex justify-center items-center py-4">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
          </div>
        )}
        <div ref={loader} />
      </div>
    </section>
  );
};

export default InfiniteScroll;
