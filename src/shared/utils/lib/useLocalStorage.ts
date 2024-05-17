export const useLocalStorage = () => {
  const getFromLocalStorage = (key: string) => {
    return JSON.parse(localStorage.getItem(key) as string);
  };

  const saveToLocalStorage = (key: string, data: unknown) => {
    localStorage.setItem(key, JSON.stringify(data));
  };

  const removeFromLocalStorage = (key: string) => {
    localStorage.removeItem(key);
  };

  return {
    getFromLocalStorage,
    saveToLocalStorage,
    removeFromLocalStorage,
  };
};
