import { Middleware } from '@reduxjs/toolkit';
import { CozApiInterface } from '../cozShoppingAPI';

const addBookmarkProperty: Middleware = () => (next) => (action) => {
  if (action.type.endsWith('fulfilled')) {
    action.payload = action.payload.map((data: CozApiInterface) => ({
      ...data,
      bookmark: false,
    }));
  }
  return next(action);
};

export default addBookmarkProperty;
