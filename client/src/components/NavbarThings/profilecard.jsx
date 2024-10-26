import React, { useState, useEffect } from 'react';
import { User, ArrowLeft, Users, MessageSquare, Activity } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ProfileCard = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

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
              stats: {
                projects: 12,
                followers: 234,
                following: 156
              }
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

  const handleBackClick = () => navigate(-1);
  const handleGroupBtn = () => navigate('/joinedgroups');

  if (loading || !userData) {
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="absolute inset-0 backdrop-blur-md bg-black/30" />
        <div className="relative w-16 h-16 animate-spin">
          <div className="absolute w-full h-full rounded-full border-4 border-t-blue-500 border-r-transparent border-b-purple-500 border-l-transparent" />
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      {/* Backdrop blur effect */}
      <div className="absolute inset-0 backdrop-blur-md bg-black/30 animate-fadeIn" />
      
      {/* Card Container */}
      <div className="relative w-full max-w-md mx-4 animate-slideIn">
        {/* Glass effect card */}
        <div className="backdrop-blur-xl bg-white/80 rounded-3xl shadow-2xl overflow-hidden border border-white/20">
          {/* Gradient header */}
          <div className="h-40 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 relative overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/20 rounded-full" />
            <div className="absolute -left-8 -bottom-8 w-24 h-24 bg-white/10 rounded-full" />
            
            {/* Back button */}
            <button
              onClick={handleBackClick}
              className="absolute top-4 left-4 p-2 rounded-full bg-black/20 text-white hover:bg-black/30 transition-all"
            >
              <ArrowLeft size={20} />
            </button>

            {/* Avatar */}
            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2">
              {userData.avatar ? (
                <img
                  src={userData.avatar}
                  alt="Profile"
                  className="w-28 h-28 rounded-full border-4 border-white shadow-xl"
                />
              ) : (
                <div className="w-28 h-28 rounded-full border-4 border-white bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center shadow-xl">
                  <User size={40} className="text-gray-400" />
                </div>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="px-6 pt-16 pb-6">
            {/* User info */}
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-800">{userData.name}</h2>
              <p className="text-gray-600 mt-1">{userData.role}</p>
              
              {/* Stats */}
              <div className="flex justify-center gap-8 mt-6 px-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-800">{userData.stats.projects}</p>
                  <p className="text-sm text-gray-600">Projects</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-800">{userData.stats.followers}</p>
                  <p className="text-sm text-gray-600">Followers</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-800">{userData.stats.following}</p>
                  <p className="text-sm text-gray-600">Following</p>
                </div>
              </div>

              {/* Mood */}
              <div className="mt-6 flex items-center justify-center gap-2">
                <Activity size={16} className="text-green-500" />
                <span className="text-sm font-medium text-gray-600">
                  Feeling {userData.mood}
                </span>
              </div>

              {/* Groups */}
              <div className="mt-6">
                <p className="text-sm font-medium text-gray-600 mb-2">Groups</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {userData.groups.map((group, index) => (
                    <span
                      key={index}
                      className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-medium px-3 py-1 rounded-full"
                    >
                      {group}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex justify-center gap-4 mt-8">
                <button
                  onClick={handleGroupBtn}
                  className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full hover:from-blue-600 hover:to-blue-700 transition-all shadow-lg shadow-blue-500/20"
                >
                  <Users size={18} />
                  Groups
                </button>
                <button
                  onClick={() => console.log('Navigate to Mentions')}
                  className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg shadow-purple-500/20"
                >
                  <MessageSquare size={18} />
                  Mentions
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;