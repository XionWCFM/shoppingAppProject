import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductType } from './productApi';

export interface ModalType {
  isOpen: boolean;
  product: ProductType;
}

const initialState: ModalType = {
  isOpen: false,
  product: {} as ProductType,
};

const modalSlice = createSlice({
  name: 'modalSlice',
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<ProductType>) => {
      state.isOpen = true;
      state.product = action.payload;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.product = {} as ProductType;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice;
