import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import api from '../lib/axios';
import type { AttendanceRecord, Location } from '../types/api';

export const useAttendance = () => {
  const queryClient = useQueryClient();

  const getAttendanceHistory = (params?: {
    startDate?: string;
    endDate?: string;
    userId?: string;
  }) => {
    return useQuery({
      queryKey: ['attendance', params],
      queryFn: async () => {
        const { data } = await api.get('/api/attendance', { params });
        return data as AttendanceRecord[];
      },
    });
  };

  const checkIn = useMutation({
    mutationFn: async (location: Location) => {
      const { data } = await api.post('/api/attendance/check-in', { location });
      return data as AttendanceRecord;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['attendance'] });
    },
  });

  const checkOut = useMutation({
    mutationFn: async (location: Location) => {
      const { data } = await api.post('/api/attendance/check-out', { location });
      return data as AttendanceRecord;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['attendance'] });
    },
  });

  return {
    getAttendanceHistory,
    checkIn,
    checkOut,
  };
};