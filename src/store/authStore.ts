import { create } from 'zustand';
import { User } from '../types';
import { mockLogin } from '../lib/mockApi';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  checkAuth: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,

  login: async (email: string, password: string) => {
    try {
      const { token } = await mockLogin(email, password);
      localStorage.setItem('token', token);
      const user = JSON.parse(atob(token));
      set({ user, isAuthenticated: true });
    } catch (error) {
      throw new Error('Invalid credentials');
    }
  },

  logout: () => {
    localStorage.removeItem('token');
    set({ user: null, isAuthenticated: false });
  },

  checkAuth: () => {
    const token = localStorage.getItem('token');
    if (!token) {
      set({ user: null, isAuthenticated: false });
      return;
    }

    try {
      const user = JSON.parse(atob(token));
      if (user.exp < Date.now()) {
        throw new Error('Token expired');
      }
      set({ user, isAuthenticated: true });
    } catch {
      localStorage.removeItem('token');
      set({ user: null, isAuthenticated: false });
    }
  },
}));