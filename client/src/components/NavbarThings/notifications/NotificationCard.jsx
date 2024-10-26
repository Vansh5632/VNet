import React from 'react';
import { getNotificationIcon } from './notificationUtil';

const NotificationCard = ({ notification }) => {
  const { IconComponent, iconColor } = getNotificationIcon(notification.type);

  return (
    <div
      className={`p-4 rounded-lg transition-all hover:transform hover:scale-[1.02] cursor-pointer
        ${notification.read ? 'bg-gray-800' : 'bg-gray-800/50 border-l-4 border-blue-500'}`}
    >
      <div className="flex items-start gap-4">
        {/* Avatar */}
        <div className="flex-shrink-0">
          {notification.avatar ? (
            <img
              src={notification.avatar}
              alt={notification.user}
              className="w-10 h-10 rounded-full"
            />
          ) : (
            <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
              <IconComponent className={iconColor} size={20} />
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div>
              <p className="text-sm text-gray-300">
                <span className="font-semibold text-white">{notification.user}</span>
                {' '}{notification.action}
              </p>
              {notification.content && (
                <p className="mt-1 text-sm text-gray-400 line-clamp-2">
                  {notification.content}
                </p>
              )}
            </div>
            <span className="flex-shrink-0 text-xs text-gray-500">
              {notification.time}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationCard;