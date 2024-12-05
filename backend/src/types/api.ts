export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'user';
  department: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateUserData {
  email: string;
  password: string;
  name: string;
  role: 'admin' | 'user';
  department: string;
}

export interface UpdateUserData {
  name?: string;
  email?: string;
  department?: string;
  role?: 'admin' | 'user';
}

export interface Location {
  latitude: number;
  longitude: number;
  address: string;
}

export interface AttendanceRecord {
  id: string;
  userId: string;
  checkIn: {
    time: string;
    location: Location;
  };
  checkOut?: {
    time: string;
    location: Location;
  };
  status: 'present' | 'late' | 'absent';
  date: string;
}

export interface AttendanceStats {
  present: number;
  late: number;
  absent: number;
  totalHours: number;
  averageHoursPerDay: number;
}

export interface Report {
  id: string;
  type: string;
  department: string;
  startDate: string;
  endDate: string;
  generatedAt: string;
  data: unknown;
}