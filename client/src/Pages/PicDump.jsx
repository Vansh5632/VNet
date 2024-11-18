import React, { useState, useRef ,useEffect} from 'react';
import { ImagePlus, Upload, X, Search, Grid, Columns } from 'lucide-react';
import Card from '../components/picDump/imageCard';
import picData from '../data/picData';

const PicDump = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {setImages(picData);}, []);

  const [isDragging, setIsDragging] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [gridView, setGridView] = useState(true);
  const [uploadProgress, setUploadProgress] = useState(null);
  const fileInputRef = useRef(null);

  // Handle file upload
  const handleImageUpload = (e) => {
    const files = e.target.files;
    if (files.length) {
      // Simulate upload progress
      setUploadProgress(0);
      const interval = setInterval(() => {
        setUploadProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => setUploadProgress(null), 500);
            return 100;
          }
          return prev + 10;
        });
      }, 100);

      // Create new image objects
      const newImages = Array.from(files).map((file, index) => ({
        id: Date.now() + index,
        url: '/api/placeholder/400/600',
        title: `New Upload ${images.length + index + 1}`,
        description: 'Recently uploaded image',
        category: 'New',
        likes: '0',
        comments: '0',
        date: 'Just now'
      }));

      setImages([...images, ...newImages]);
    }
  };

  // Handle drag and drop
  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setIsDragging(true);
    } else if (e.type === 'dragleave') {
      setIsDragging(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    
    const files = e.dataTransfer.files;
    if (files.length) {
      fileInputRef.current.files = files;
      handleImageUpload({ target: { files } });
    }
  };

  // Filter images based on search
  const filteredImages = images.filter(image => 
    image.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    image.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    image.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 text-white">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-12">
        <h1 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          Picture Gallery
        </h1>
        
        {/* Controls Bar */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mb-8">
          {/* Search Bar */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search images..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-800/50 rounded-lg border border-slate-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all duration-300"
            />
          </div>
          
          {/* View Toggle */}
          <div className="flex items-center gap-2 bg-slate-800/50 p-1 rounded-lg">
            <button
              onClick={() => setGridView(true)}
              className={`p-2 rounded-md transition-all duration-300 ${
                gridView ? 'bg-blue-500 text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              <Grid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setGridView(false)}
              className={`p-2 rounded-md transition-all duration-300 ${
                !gridView ? 'bg-blue-500 text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              <Columns className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Upload Section */}
        <div
          className="relative mb-12"
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <input
            ref={fileInputRef}
            type="file"
            className="hidden"
            accept="image/*"
            onChange={handleImageUpload}
            multiple
          />
          
          <label className="cursor-pointer block">
            <div
              className={`relative flex flex-col items-center gap-4 p-8 border-2 border-dashed rounded-xl transition-all duration-300 ${
                isDragging
                  ? 'border-blue-500 bg-blue-500/10'
                  : 'border-slate-700 hover:border-blue-500 hover:bg-slate-800/50'
              }`}
            >
              {uploadProgress !== null ? (
                <div className="w-full max-w-xs">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">Uploading...</span>
                    <span className="text-sm text-blue-400">{uploadProgress}%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-500 transition-all duration-300"
                      style={{ width: `${uploadProgress}%` }}
                    />
                  </div>
                </div>
              ) : (
                <>
                  <div className="relative">
                    <ImagePlus className="w-16 h-16 text-blue-500" />
                    {isDragging && (
                      <Upload className="absolute inset-0 w-16 h-16 text-blue-500 animate-ping" />
                    )}
                  </div>
                  <div className="text-center">
                    <p className="text-xl font-semibold mb-2">
                      Drop your images here or click to upload
                    </p>
                    <p className="text-gray-400">
                      Support for multiple images upload
                    </p>
                  </div>
                </>
              )}
            </div>
          </label>
        </div>
      </div>

      {/* Image Grid */}
      <div className={`max-w-7xl mx-auto ${
        gridView 
          ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'
          : 'flex flex-col gap-8'
      }`}>
        {filteredImages.length > 0 ? (
          filteredImages.map((image) => (
            <Card key={image.id} image={image} />
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-xl text-gray-400">No images found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PicDump;