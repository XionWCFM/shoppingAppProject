import { configureStore } from '@reduxjs/toolkit';
import darkSlice from './darkSlice';
import { cozShoppingAPI, CozApiInterface } from './cozShoppingAPI';
import { setupListeners } from '@reduxjs/toolkit/query';
import { Middleware } from '@reduxjs/toolkit';

const addBookmarkProperty: Middleware = () => (next) => (action) => {
  if (action.type.endsWith('fulfilled')) {
    action.payload = action.payload.map((data: CozApiInterface) => ({
      ...data,
      bookmark: false,
    }));
  }
  return next(action);
};
const store = configureStore({
  reducer: {
    dark: darkSlice.reducer,
    [cozShoppingAPI.reducerPath]: cozShoppingAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      cozShoppingAPI.middleware,
      addBookmarkProperty,
    ),
});

setupListeners(store.dispatch);

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
