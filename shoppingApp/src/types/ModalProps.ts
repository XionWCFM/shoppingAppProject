import { Dispatch, SetStateAction } from 'react';
import { ProductType } from '../modules/productApi';

interface ModalProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  src: string;
  title: string;
  product: ProductType;
}

export default ModalProps;
