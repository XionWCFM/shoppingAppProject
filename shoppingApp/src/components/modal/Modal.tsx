import BackDrop from './BackDrop';
import { createPortal } from 'react-dom';
import ModalImage from './ModalImage';
import ModalProps from '../../types/ModalProps';

const portalElement = document.getElementById('modal') as HTMLElement;

const Modal = ({ setIsOpen, src, product, title }: ModalProps) => {
  return (
    <>
      {createPortal(
        <>
          <BackDrop />
          <ModalImage
            setIsOpen={setIsOpen}
            src={src}
            product={product}
            title={title}
          />
        </>,
        portalElement,
      )}
    </>
  );
};

export default Modal;
