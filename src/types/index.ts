export interface User {
  id: string;
  name: string;
  email: string;
  role: 'ADMIN' | 'USER' | 'MANAGER';
  department?: string;
  profileImage?: string;
}

export interface AttendanceRecord {
  id: string;
  userId: string;
  checkIn: Date;
  checkOut?: Date;
  status: 'PRESENT' | 'ABSENT' | 'LATE';
  location?: {
    latitude: number;
    longitude: number;
  };
}

export interface LeaveRequest {
  id: string;
  userId: string;
  startDate: Date;
  endDate: Date;
  reason: string;
  status: 'PENDING' | 'APPROVED' | 'REJECTED';
  type: 'SICK' | 'VACATION' | 'OTHER';
}