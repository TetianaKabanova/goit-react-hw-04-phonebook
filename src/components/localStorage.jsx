import { useState, useEffect } from 'react';

export default function useLocaleStorage(key, defaultValue) {
  const [contact, setState] = useState(() => {
    return JSON.parse(window.localStorage.getItem(key) ?? defaultValue);
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(contact));
  }, [key, contact]);
  return [contact, setState];
}
