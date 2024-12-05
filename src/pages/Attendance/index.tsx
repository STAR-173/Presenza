import React from 'react';
import { Calendar, Clock } from 'lucide-react';
import { format } from 'date-fns';
import { AttendanceTable } from './AttendanceTable';
import { CheckInOut } from './CheckInOut';

export const AttendancePage: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="md:flex md:items-center md:justify-between">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            Attendance
          </h2>
        </div>
        <div className="mt-4 flex md:mt-0 md:ml-4">
          <span className="inline-flex items-center px-3 py-2 text-sm font-semibold text-gray-900">
            <Calendar className="h-5 w-5 mr-2" />
            {format(new Date(), 'MMMM d, yyyy')}
          </span>
          <span className="ml-3 inline-flex items-center px-3 py-2 text-sm font-semibold text-gray-900">
            <Clock className="h-5 w-5 mr-2" />
            {format(new Date(), 'h:mm a')}
          </span>
        </div>
      </div>

      <CheckInOut />
      <AttendanceTable />
    </div>
  );
};