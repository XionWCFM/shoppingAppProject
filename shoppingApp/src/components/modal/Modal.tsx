import BackDrop from './BackDrop';
import { createPortal } from 'react-dom';
import ModalImage from './ModalImage';
import ModalProps from '../../types/ModalProps';
import Toast from '../toast/Toast';

const portalElement = document.getElementById('modal') as HTMLElement;

const Modal = ({ setIsOpen, src, data, title }: ModalProps) => {
  return (
    <>
      {createPortal(
        <>
          <Toast data={data} />
          <BackDrop />
          <ModalImage
            setIsOpen={setIsOpen}
            src={src}
            data={data}
            title={title}
          />
        </>,
        portalElement,
      )}
    </>
  );
};

export default Modal;
