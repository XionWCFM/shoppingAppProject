import { Dispatch, SetStateAction } from 'react';
import { ProductType } from '../modules/ProductApi';

interface ModalProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  src: string;
  title: string;
  data: ProductType;
}

export default ModalProps;
