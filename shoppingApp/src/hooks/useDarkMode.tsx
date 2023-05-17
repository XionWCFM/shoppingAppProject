import { RootState } from '../modules/index';
import { toggleDarkMode } from '../modules/darkSlice';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export type useDark = [boolean, () => void];

const useDarkMode = (): useDark => {
  const isDark = useSelector((state: RootState) => state.dark.isDark);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isDark) {
      localStorage.theme = 'dark';
      document.documentElement.classList.add('dark');
    } else {
      localStorage.theme = 'light';
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const onToggleDarkMode = (): void => {
    dispatch(toggleDarkMode());
  };

  return [isDark, onToggleDarkMode];
};

export default useDarkMode;
