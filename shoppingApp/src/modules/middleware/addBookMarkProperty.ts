import { Middleware } from '@reduxjs/toolkit';
import { CozApiInterface } from '../cozShoppingAPI';
import getLocalStorage from '../../utils/getLocalStorage';

const addBookmarkProperty: Middleware = () => (next) => (action) => {
  const getBookMarkData: CozApiInterface[] = getLocalStorage<CozApiInterface[]>(
    'bookmark',
    [],
  );

  if (action.type.endsWith('fulfilled')) {
    action.payload = action.payload.map((data: CozApiInterface) => ({
      ...data,
      bookmark: false,
    }));
  }
  return next(action);
};

export default addBookmarkProperty;
