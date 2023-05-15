const getLocalStorage = <T>(key: string, initialValue: T): T => {
  const getItem = localStorage.getItem(key);
  return getItem === null ? initialValue : JSON.parse(getItem);
};

export default getLocalStorage;
