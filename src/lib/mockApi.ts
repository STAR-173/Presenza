import { MOCK_USERS } from './mockData';

export const mockLogin = async (email: string, password: string) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  const user = MOCK_USERS.find(u => u.email === email && u.password === password);
  
  if (!user) {
    throw new Error('Invalid credentials');
  }

  // Create a mock JWT token (in a real app, this would be done server-side)
  const token = btoa(JSON.stringify({
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
    department: user.department,
    exp: Date.now() + 24 * 60 * 60 * 1000 // 24 hours from now
  }));

  return { token };
};