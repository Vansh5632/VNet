import React, { useState, useEffect } from 'react';
import { User, ArrowLeft, Users, MessageSquare } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ProfileCard = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleGroupBtn=()=>{
    navigate('/joinedgroups')
  }

  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);
      try {
        const response = await new Promise((resolve) =>
          setTimeout(() =>
            resolve({
              name: 'Jane Doe',
              role: 'Full Stack Developer',
              groups: ['Tech Innovators', 'React Ninjas', 'AI Enthusiasts'],
              mood: 'Excited',
              avatar: null,
            }), 1000)
        );
        setUserData(response);
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleBackClick = () => {
        navigate(-1);
  };

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="absolute inset-0 bg-gray-900 bg-opacity-30 backdrop-blur-sm"></div>
        <div className="relative max-w-sm mx-auto bg-white rounded-xl shadow-lg overflow-hidden p-6 text-center z-10">
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  if (!userData) {
    return (
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="absolute inset-0 bg-gray-900 bg-opacity-30 backdrop-blur-sm"></div>
        <div className="relative max-w-sm mx-auto bg-white rounded-xl shadow-lg overflow-hidden p-6 text-center z-10">
          <p>Error loading user data</p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Blurred Background Effect */}
      <div className="absolute inset-0 bg-gray-900 bg-opacity-30 backdrop-blur-sm"></div>
      
      {/* Profile Card */}
      <div className="relative max-w-sm mx-auto bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl z-10">
        
        {/* Back Button */}
        <button
          className="absolute top-4 left-4 p-2 bg-white rounded-full text-gray-600 hover:text-gray-800 hover:bg-gray-100 shadow-lg z-20"
          onClick={handleBackClick}
        >
          <ArrowLeft size={24} />
        </button>

        {/* Profile Header with Avatar */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-32 relative">
          {userData.avatar ? (
            <img
              src={userData.avatar}
              alt="Profile"
              className="w-24 h-24 rounded-full border-4 border-white absolute left-1/2 transform -translate-x-1/2 translate-y-1/2"
            />
          ) : (
            <div className="w-24 h-24 rounded-full border-4 border-white bg-gray-200 flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 translate-y-1/2">
              <User size={48} className="text-gray-400" />
            </div>
          )}
        </div>

        {/* Profile Details */}
        <div className="p-6 pt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-800">{userData.name}</h2>
          <p className="text-gray-600 mb-4">{userData.role}</p>
          <div id="groupsJoined" className="text-sm text-gray-500">
            <p className="font-medium mb-2">Groups:</p>
            <div className="flex flex-wrap justify-center gap-2">
              {userData.groups.map((group, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full"
                >
                  {group}
                </span>
              ))}
            </div>
          </div>

          {/* Mood */}
          <div id="currentMood" className="mt-4">
            <span className="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full">
              Feeling {userData.mood}!
            </span>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-around mt-6">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-600"
              onClick={handleGroupBtn}
            >
              <Users size={16} />
              Groups
            </button>
            <button
              className="bg-purple-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-purple-600"
              onClick={() => console.log('Navigate to Mentions')}
            >
              <MessageSquare size={16} />
              Mentions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
