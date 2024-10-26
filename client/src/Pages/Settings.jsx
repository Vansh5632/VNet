import React, { useState } from 'react';
import { 
  User, 
  Lock, 
  Mail, 
  Globe, 
  ChevronRight,
  Edit2,
  Shield,
  Bell,
  Eye,
  EyeOff,
  Save,
  X
} from 'lucide-react';

const Settings = () => {
  const [activeSection, setActiveSection] = useState('profile');
  const [formData, setFormData] = useState({
    answer: '',
    bio: '',
    email: '',
    password: '',
    privacySetting: 'public',
    notifications: {
      email: true,
      push: true,
      marketing: false
    }
  });
  const [showPassword, setShowPassword] = useState(false);
  const [saveStatus, setSaveStatus] = useState(null);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaveStatus('saving');
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setSaveStatus('saved');
    setTimeout(() => setSaveStatus(null), 2000);
  };

  const renderSaveStatus = () => {
    if (!saveStatus) return null;
    
    return (
      <div className={`fixed bottom-8 right-8 px-6 py-3 rounded-lg shadow-lg transition-all transform ${
        saveStatus ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      } ${
        saveStatus === 'saving' ? 'bg-blue-600' : 'bg-green-600'
      }`}>
        <p className="text-white font-medium">
          {saveStatus === 'saving' ? 'Saving changes...' : 'Changes saved successfully!'}
        </p>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="w-64 flex-shrink-0">
            <div className="bg-gray-800 rounded-xl p-4">
              <h2 className="text-white font-semibold px-4 mb-4">Settings</h2>
              <nav className="space-y-1">
                {[
                  { id: 'profile', icon: User, label: 'Profile' },
                  { id: 'security', icon: Shield, label: 'Security' },
                  { id: 'privacy', icon: Lock, label: 'Privacy' },
                  { id: 'notifications', icon: Bell, label: 'Notifications' }
                ].map(item => (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
                      activeSection === item.id
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-400 hover:bg-gray-700 hover:text-white'
                    }`}
                  >
                    <item.icon size={18} />
                    <span>{item.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-gray-800 rounded-xl p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Profile Section */}
                {activeSection === 'profile' && (
                  <div className="space-y-6">
                    <div className="border-b border-gray-700 pb-3">
                      <h2 className="text-xl font-semibold text-white">Profile Settings</h2>
                      <p className="text-gray-400 text-sm mt-1">Manage your profile information</p>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Profile Bio
                        </label>
                        <div className="relative">
                          <textarea
                            value={formData.bio}
                            onChange={(e) => handleInputChange('bio', e.target.value)}
                            placeholder="Write something about yourself"
                            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            rows="4"
                          />
                          <Edit2 className="absolute right-3 top-3 text-gray-400" size={18} />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Email Address
                        </label>
                        <div className="relative">
                          <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your email"
                          />
                          <Mail className="absolute right-3 top-3 text-gray-400" size={18} />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Security Section */}
                {activeSection === 'security' && (
                  <div className="space-y-6">
                    <div className="border-b border-gray-700 pb-3">
                      <h2 className="text-xl font-semibold text-white">Security Settings</h2>
                      <p className="text-gray-400 text-sm mt-1">Manage your security preferences</p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        New Password
                      </label>
                      <div className="relative">
                        <input
                          type={showPassword ? "text" : "password"}
                          value={formData.password}
                          onChange={(e) => handleInputChange('password', e.target.value)}
                          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Enter new password"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-3 text-gray-400 hover:text-gray-300"
                        >
                          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Privacy Section */}
                {activeSection === 'privacy' && (
                  <div className="space-y-6">
                    <div className="border-b border-gray-700 pb-3">
                      <h2 className="text-xl font-semibold text-white">Privacy Settings</h2>
                      <p className="text-gray-400 text-sm mt-1">Control your privacy preferences</p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Profile Visibility
                      </label>
                      <select
                        value={formData.privacySetting}
                        onChange={(e) => handleInputChange('privacySetting', e.target.value)}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
                      >
                        <option value="public">Public</option>
                        <option value="private">Private</option>
                        <option value="friends-only">Friends Only</option>
                      </select>
                      <Globe className="absolute right-3 top-3 text-gray-400" size={18} />
                    </div>
                  </div>
                )}

                {/* Save Button */}
                <div className="flex items-center justify-end gap-4 pt-6">
                  <button
                    type="button"
                    onClick={() => setFormData({})}
                    className="px-4 py-2 text-gray-400 hover:text-white transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 flex items-center gap-2"
                  >
                    <Save size={18} />
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {renderSaveStatus()}
    </div>
  );
};

export default Settings;