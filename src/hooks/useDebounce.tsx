import { useEffect, useState } from "react";

export function useDebounce(value: string, delay: number = 500) {
  const [debounceValue, setDebouceValue] = useState(value);

  useEffect(() => {
    const debouceTimer = setTimeout(() => setDebouceValue(value), delay);
    return () => clearTimeout(debouceTimer);
  }, [value, delay]);

  return debounceValue;
}
