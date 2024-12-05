import React from 'react';
import { useAuthStore } from '../../store/authStore';
import { Clock, Users, Calendar, AlertTriangle } from 'lucide-react';
import { StatCard } from './StatCard';
import { RecentActivity } from './RecentActivity';

export const DashboardPage: React.FC = () => {
  const { user } = useAuthStore();

  return (
    <div className="space-y-6">
      <div className="md:flex md:items-center md:justify-between">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            Welcome back, {user?.name}
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Present Today"
          value="85%"
          icon={<Clock className="h-6 w-6" />}
          trend="up"
          trendValue="5%"
        />
        <StatCard
          title="Total Employees"
          value="150"
          icon={<Users className="h-6 w-6" />}
          trend="up"
          trendValue="12"
        />
        <StatCard
          title="On Leave"
          value="8"
          icon={<Calendar className="h-6 w-6" />}
          trend="down"
          trendValue="2"
        />
        <StatCard
          title="Late Arrivals"
          value="5"
          icon={<AlertTriangle className="h-6 w-6" />}
          trend="down"
          trendValue="3"
        />
      </div>

      <div className="mt-8">
        <RecentActivity />
      </div>
    </div>
  );
};