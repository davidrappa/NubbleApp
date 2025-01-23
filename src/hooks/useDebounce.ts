import {useEffect, useState} from 'react';

/**
 * @description https://usehooks-ts.com
 * @param value to be debounced
 * @param delay in milliseconds @default 500
 * @returns debounce value
 */
export function useDebounce<T>(value: T, delay = 500): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}
