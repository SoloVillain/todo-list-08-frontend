'use client';

import { useSyncExternalStore, useCallback } from 'react';

function subscribe(callback: () => void) {
  window.addEventListener('storage', callback);
  window.addEventListener('local-storage-update', callback);
  return () => {
    window.removeEventListener('storage', callback);
    window.removeEventListener('local-storage-update', callback);
  };
}

export function useLocalStorage<T>(key: string, initialValue: T) {
  const getSnapshot = (): string => {
    try {
      const item = window.localStorage.getItem(key);
      return item !== null ? item : JSON.stringify(initialValue);
    } catch {
      return JSON.stringify(initialValue);
    }
  };

  const getServerSnapshot = (): string => {
    return JSON.stringify(initialValue);
  };

  // Mengambil state dari external store (localStorage) secara tersinkronisasi
  const rawValue = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const storedValue: T = JSON.parse(rawValue);

  const setValue = useCallback(
    (value: T | ((val: T) => T)) => {
      try {
        const item = window.localStorage.getItem(key);
        const current: T = item !== null ? JSON.parse(item) : initialValue;
        const nextValue = value instanceof Function ? value(current) : value;

        window.localStorage.setItem(key, JSON.stringify(nextValue));
        // Memicu event agar useSyncExternalStore mengetahui adanya perubahan
        window.dispatchEvent(new Event('local-storage-update'));
      } catch (error) {
        console.warn(`Gagal menyimpan ke localStorage untuk key "${key}":`, error);
      }
    },
    [key, initialValue]
  );

  return [storedValue, setValue] as const;
}