import { createAsyncThunk } from '@reduxjs/toolkit';
import toastSlice, { ToastMessageInterface } from '../toastSlice';

export const showToastAsync = createAsyncThunk<
  Promise<void>,
  ToastMessageInterface
>('toast/showToastAsync', async (message, { dispatch }) => {
  dispatch(toastSlice.actions.showToast(message));
  await new Promise((resolve) => setTimeout(resolve, 2000));
  dispatch(toastSlice.actions.shiftToast());
});
