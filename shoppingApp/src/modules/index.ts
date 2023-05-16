import { configureStore } from '@reduxjs/toolkit';
import darkSlice from './darkSlice';
import { ProductApi } from './ProductApi';
import { setupListeners } from '@reduxjs/toolkit/query';
import addBookmarkProperty from './middleware/addBookMarkProperty';
import toastSlice from './toastSlice';

const store = configureStore({
  reducer: {
    dark: darkSlice.reducer,
    [ProductApi.reducerPath]: ProductApi.reducer,
    toast: toastSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ProductApi.middleware, addBookmarkProperty),
});

setupListeners(store.dispatch);

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
