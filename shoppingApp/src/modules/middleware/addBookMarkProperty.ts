import { Middleware } from '@reduxjs/toolkit';
import { ProductType } from '../productApi';
import getLocalStorage from '../../utils/getLocalStorage';

const addBookmarkProperty: Middleware = () => (next) => (action) => {
  const getBookMarkData: ProductType[] = getLocalStorage<ProductType[]>(
    'bookmark',
    [],
  );

  if (action.type.endsWith('fulfilled') && action.payload !== undefined) {
    action.payload = action.payload.map((data: ProductType) => {
      const localDataIdx = getBookMarkData.findIndex(
        (localData: ProductType) => localData.id === data.id,
      );

      return localDataIdx === -1
        ? { ...data, bookmark: false }
        : { ...data, bookmark: true };
    });
  }

  return next(action);
};

export default addBookmarkProperty;
