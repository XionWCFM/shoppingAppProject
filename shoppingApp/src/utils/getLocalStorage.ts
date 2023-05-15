const getLocalStorage = <T>(key: string, initialValue: T): T => {
  return localStorage.getItem(key) === null
    ? initialValue
    : JSON.parse(localStorage.getItem(key) as string);
};

export default getLocalStorage;
