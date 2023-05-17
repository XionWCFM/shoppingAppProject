import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ToastMessageInterface {
  id: number;
  content: string;
  bookmark: boolean;
}

export interface ToastInterface {
  messages: ToastMessageInterface[];
}

const initialState: ToastInterface = {
  messages: [],
};

const toastSlice = createSlice({
  name: 'toastSlice',
  initialState,
  reducers: {
    showToast: (state, action: PayloadAction<ToastMessageInterface>) => {
      state.messages.push({
        id: action.payload.id,
        content: action.payload.content,
        bookmark: action.payload.bookmark,
      });
    },
    hideToast: (state, action: PayloadAction<number>) => {
      const msgIdx = state.messages.findIndex(
        (msg) => msg.id === action.payload,
      );
      state.messages.splice(msgIdx, 1);
    },
    shiftToast: (state) => {
      state.messages.shift();
    },
  },
});

export const { showToast, hideToast } = toastSlice.actions;
export default toastSlice;
