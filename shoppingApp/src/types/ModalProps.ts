import { Dispatch, SetStateAction } from 'react';
import { CozApiInterface } from '../modules/cozShoppingAPI';

interface ModalProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  src: string;
  title: string;
  data: CozApiInterface;
}

export default ModalProps;
