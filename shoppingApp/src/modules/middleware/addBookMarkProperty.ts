import { Middleware } from '@reduxjs/toolkit';
import { CozApiInterface } from '../ProductApi';
import getLocalStorage from '../../utils/getLocalStorage';

const addBookmarkProperty: Middleware = () => (next) => (action) => {
  const getBookMarkData: CozApiInterface[] = getLocalStorage<CozApiInterface[]>(
    'bookmark',
    [],
  );

  if (action.type.endsWith('fulfilled')) {
    action.payload = action.payload.map((data: CozApiInterface) => {
      const localDataIdx = getBookMarkData.findIndex(
        (localData: CozApiInterface) => localData.id === data.id,
      );

      return localDataIdx === -1
        ? { ...data, bookmark: false }
        : { ...data, bookmark: true };
    });
  }
  return next(action);
};

export default addBookmarkProperty;
