import React from 'react';
import { format } from 'date-fns';

const activities = [
  {
    id: 1,
    user: 'John Doe',
    type: 'check-in',
    time: new Date(2024, 2, 15, 9, 0),
    status: 'on-time',
  },
  {
    id: 2,
    user: 'Jane Smith',
    type: 'check-in',
    time: new Date(2024, 2, 15, 9, 15),
    status: 'late',
  },
  // Add more activities as needed
];

export const RecentActivity: React.FC = () => {
  return (
    <div className="bg-white shadow rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">Recent Activity</h3>
      </div>
      <div className="border-t border-gray-200">
        <ul role="list" className="divide-y divide-gray-200">
          {activities.map((activity) => (
            <li key={activity.id} className="px-4 py-4 sm:px-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                      {activity.user.charAt(0)}
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-900">{activity.user}</p>
                    <p className="text-sm text-gray-500">
                      {activity.type === 'check-in' ? 'Checked in' : 'Checked out'}
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <p className="text-sm text-gray-500">
                    {format(activity.time, 'h:mm a')}
                  </p>
                  <span
                    className={`ml-4 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      activity.status === 'on-time'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {activity.status === 'on-time' ? 'On Time' : 'Late'}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};