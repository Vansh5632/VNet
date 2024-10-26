import { MessageSquare, Heart, UserPlus, Star, Bell } from 'lucide-react';

export const getNotificationIcon = (type) => {
  const icons = {
    message: { icon: MessageSquare, color: 'text-blue-400' },
    like: { icon: Heart, color: 'text-red-400' },
    follow: { icon: UserPlus, color: 'text-green-400' },
    star: { icon: Star, color: 'text-yellow-400' },
    default: { icon: Bell, color: 'text-purple-400' }
  };

  const IconComponent = icons[type]?.icon || icons.default.icon;
  const iconColor = icons[type]?.color || icons.default.color;

  return { IconComponent, iconColor };
};

export const formatTimeAgo = (timestamp) => {
  // This is a placeholder for actual time formatting logic
  return timestamp;
};

export const filterNotifications = (notifications, filters) => {
  return notifications.filter(notification => {
    if (filters.onlyUnread && notification.read) return false;
    if (filters.type && notification.type !== filters.type) return false;
    return true;
  });
};