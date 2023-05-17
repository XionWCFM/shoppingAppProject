import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductType } from './productApi';

export interface ModalType {
  isOpen: boolean;
  src: string;
  title: string;
  product: ProductType;
}

const initialState: ModalType = {
  isOpen: false,
  src: '',
  title: '',
  product: {} as ProductType,
};

const modalSlice = createSlice({
  name: 'modalSlice',
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<ModalType>) => {
      const { src, title, product } = action.payload;
      state.isOpen = true;
      state.src = src;
      state.title = title;
      state.product = product;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.src = '';
      state.title = '';
      state.product = {} as ProductType;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice;
