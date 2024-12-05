import React from 'react';
import { MapPin } from 'lucide-react';

export const CheckInOut: React.FC = () => {
  const [location, setLocation] = React.useState<GeolocationPosition | null>(null);

  const handleCheckInOut = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation(position);
          // Handle check-in/out logic here
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    }
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-medium text-gray-900">Attendance Check</h3>
          <p className="mt-1 text-sm text-gray-500">
            Record your attendance for today
          </p>
        </div>
        <button
          onClick={handleCheckInOut}
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <MapPin className="h-5 w-5 mr-2" />
          Check In
        </button>
      </div>
      {location && (
        <div className="mt-4 text-sm text-gray-500">
          Location recorded: {location.coords.latitude}, {location.coords.longitude}
        </div>
      )}
    </div>
  );
};