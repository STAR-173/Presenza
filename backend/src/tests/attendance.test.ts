import { describe, it, expect, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useAttendance } from '../services/attendance';

vi.mock('../lib/axios');

describe('Attendance', () => {
  it('should fetch attendance history', async () => {
    const { result } = renderHook(() => useAttendance());
    
    const history = await act(async () => {
      return await result.current.getAttendanceHistory().refetch();
    });

    expect(history.data).toBeDefined();
    expect(Array.isArray(history.data)).toBe(true);
  });

  it('should handle check-in', async () => {
    const { result } = renderHook(() => useAttendance());
    
    await act(async () => {
      await result.current.checkIn.mutateAsync({
        latitude: 0,
        longitude: 0,
        address: 'Test Location',
      });
    });

    expect(result.current.checkIn.isSuccess).toBe(true);
  });
});