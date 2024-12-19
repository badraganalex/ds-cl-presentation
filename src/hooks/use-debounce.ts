import { useState, useEffect } from "react";

/**
 * Hook that can be used to debounce a value.
 * @param {T} value The value to be debounced.
 * @param {number} delay The debounce delay in milliseconds.
 * @returns {T} The debounced value.
 */
export const useDebounce = <T>(value: T, delay = 500): T => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Cleanup function to clear the timeout if value or delay changes
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]); // Re-run effect when `value` or `delay` changes

  return debouncedValue;
};
