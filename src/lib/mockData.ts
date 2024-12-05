export const MOCK_USERS = [
  {
    id: '1',
    name: 'Admin User',
    email: 'admin@example.com',
    password: 'admin123', // In a real app, passwords would be hashed
    role: 'ADMIN' as const,
    department: 'Management'
  },
  {
    id: '2',
    name: 'Regular User',
    email: 'user@example.com',
    password: 'user123',
    role: 'USER' as const,
    department: 'Engineering'
  }
];