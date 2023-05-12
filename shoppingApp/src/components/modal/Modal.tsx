import BackDrop from './BackDrop';
import { createPortal } from 'react-dom';
import ModalImage from './ModalImage';
const portalElement = document.getElementById('modal') as HTMLElement;

const Modal = () => {
  return (
    <>
      {createPortal(<BackDrop />, portalElement)}
      {createPortal(<ModalImage />, portalElement)}
    </>
  );
};

export default Modal;
