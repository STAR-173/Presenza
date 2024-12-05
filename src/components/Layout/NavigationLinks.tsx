import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';
import { LayoutDashboard, Users, Calendar, FileText } from 'lucide-react';

interface NavigationItem {
  to: string;
  icon: React.ReactNode;
  label: string;
  adminOnly?: boolean;
}

const navigationItems: NavigationItem[] = [
  {
    to: '/dashboard',
    icon: <LayoutDashboard className="w-4 h-4 mr-2" />,
    label: 'Dashboard'
  },
  {
    to: '/attendance',
    icon: <Calendar className="w-4 h-4 mr-2" />,
    label: 'Attendance'
  },
  {
    to: '/users',
    icon: <Users className="w-4 h-4 mr-2" />,
    label: 'Users',
    adminOnly: true
  },
  {
    to: '/reports',
    icon: <FileText className="w-4 h-4 mr-2" />,
    label: 'Reports'
  }
];

export const NavigationLinks: React.FC = () => {
  const { user } = useAuthStore();

  return (
    <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
      {navigationItems.map((item) => (
        (!item.adminOnly || user?.role === 'ADMIN') && (
          <Link
            key={item.to}
            to={item.to}
            className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300"
          >
            {item.icon}
            {item.label}
          </Link>
        )
      ))}
    </div>
  );
};