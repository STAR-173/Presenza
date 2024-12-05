import { describe, it, expect, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useLogin, useLogout } from '../services/auth';
import { useAuthStore } from '../stores/auth';

vi.mock('../lib/axios');

describe('Authentication', () => {
  it('should handle login successfully', async () => {
    const { result } = renderHook(() => useLogin());
    
    await act(async () => {
      await result.current.mutateAsync({
        email: 'test@example.com',
        password: 'password123',
      });
    });

    const authStore = useAuthStore.getState();
    expect(authStore.token).toBeTruthy();
    expect(authStore.user).toBeTruthy();
  });

  it('should handle logout', async () => {
    const { result } = renderHook(() => useLogout());
    
    await act(async () => {
      await result.current.mutateAsync();
    });

    const authStore = useAuthStore.getState();
    expect(authStore.token).toBeNull();
    expect(authStore.user).toBeNull();
  });
});