import React, { useState, useEffect, useRef } from 'react';

const InfiniteScroll = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
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
  }, []);

  const handleObserver = (entities) => {
    const target = entities[0];
    if (target.isIntersecting) {
      setPage((prev) => prev + 1);
    }
  };

  const loadMoreImages = () => {
    setLoading(true);
    const newImages = Array.from({ length: 10 }, (_, index) => ({
      id: images.length + index + 1,
      url: `https://picsum.photos/500/300?random=${images.length + index + 1}`,
      description: `Random Image ${images.length + index + 1}`,
      likes: 0,
    }));

    setTimeout(() => {
      setImages((prev) => [...prev, ...newImages]);
      setLoading(false);
    }, 1000);
  };

  const increaseLikes = (index) => {
    const updatedImages = [...images];
    updatedImages[index].likes += 1;
    setImages(updatedImages);
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
              alt={image.description} 
              className="w-full h-48 sm:h-56 lg:h-64 object-cover rounded-t-lg sm:rounded-t-xl lg:rounded-t-2xl" 
              loading="lazy"
            />
            <div className="p-3 sm:p-4 rounded-b-lg sm:rounded-b-xl lg:rounded-b-2xl bg-gradient-to-r from-emerald-600 to-turquoise-600">
              <p className="text-white text-sm sm:text-base font-semibold truncate">{image.description}</p>
              <div className="flex justify-around mt-3 space-x-4">
                {/* Like Button */}
                <button
                  className="flex items-center justify-center text-white hover:text-pink-400 transform transition-all duration-300 ease-in-out hover:scale-110"
                  onClick={() => increaseLikes(index)}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 15l7-7 7 7"
                    ></path>
                  </svg>
                  <span className="ml-1">Like</span>
                  <span className="ml-2 text-sm">{image.likes}</span>
                </button>

                {/* Share Button */}
                <button
                  className="flex items-center justify-center text-white hover:text-blue-400 transform transition-all duration-300 ease-in-out hover:scale-110"
                  onClick={() => console.log(`Shared: ${image.url}`)}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 12v.01M12 20l9-8-9-8M4 12h8.01"
                    ></path>
                  </svg>
                  <span className="ml-1">Share</span>
                </button>

                {/* Download Button */}
                <button
                  className="flex items-center justify-center text-white hover:text-green-400 transform transition-all duration-300 ease-in-out hover:scale-110"
                  onClick={() => window.open(image.url, '_blank')}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M4 12l4 4m0 0l4-4m-4 4V4"
                    ></path>
                  </svg>
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
