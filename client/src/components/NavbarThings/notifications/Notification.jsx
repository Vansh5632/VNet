import React, { useState, useEffect } from 'react';
import {
  Bell,
  Clock,
  MoreVertical,
  ArrowLeft,
  Filter
} from 'lucide-react';
import NotificationCard from './NotificationCard';
import { filterNotifications } from './notificationUtil';
import notificationsData from '../../../data/Notifications.json';

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    onlyUnread: false,
    type: null
  });

  useEffect(() => {
    const loadNotifications = async () => {
      try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        setNotifications(notificationsData.notifications);
        setLoading(false);
      } catch (err) {
        setError('Failed to load notifications');
        setLoading(false);
      }
    };

    loadNotifications();
  }, []);

  const filteredNotifications = filterNotifications(notifications, filters);
  const unreadCount = notifications.filter(n => !n.read).length;

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-red-400 text-center">
          <Bell size={40} className="mx-auto mb-4" />
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700 sticky top-0 z-10">
        <div className="max-w-2xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button className="p-2 hover:bg-gray-700 rounded-full transition-colors">
                <ArrowLeft size={20} className="text-gray-400" />
              </button>
              <h1 className="text-xl font-semibold text-white">Notifications</h1>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-400">
                {unreadCount} new
              </span>
              <button 
                className="p-2 hover:bg-gray-700 rounded-full transition-colors"
                onClick={() => setFilters(prev => ({ ...prev, onlyUnread: !prev.onlyUnread }))}
              >
                <Filter size={20} className={`${filters.onlyUnread ? 'text-blue-400' : 'text-gray-400'}`} />
              </button>
              <button className="p-2 hover:bg-gray-700 rounded-full transition-colors">
                <MoreVertical size={20} className="text-gray-400" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Notifications List */}
      <div className="max-w-2xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Clock size={16} className="text-gray-400" />
            <span className="text-sm text-gray-400">Recent</span>
          </div>
        </div>

        {filteredNotifications.length === 0 ? (
          <div className="text-center py-8">
            <Bell size={40} className="mx-auto mb-4 text-gray-600" />
            <p className="text-gray-400">No notifications to show</p>
          </div>
        ) : (
          <div className="space-y-2">
            {filteredNotifications.map((notification) => (
              <NotificationCard
                key={notification.id}
                notification={notification}
              />
            ))}
          </div>
        )}

        {filteredNotifications.length > 0 && (
          <div className="mt-6 text-center">
            <button className="px-4 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors">
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Notifications;