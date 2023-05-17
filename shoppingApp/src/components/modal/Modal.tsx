import BackDrop from './BackDrop';
import { createPortal } from 'react-dom';
import ModalImage from './ModalImage';
import { useSelector } from 'react-redux';
import { RootState } from '../../modules';

const portalElement = document.getElementById('modal') as HTMLElement;

const Modal = () => {
  const isModalOpen = useSelector((state: RootState) => state.modal.isOpen);
  return (
    <>
      {isModalOpen &&
        createPortal(
          <>
            <BackDrop />
            <ModalImage />
          </>,
          portalElement,
        )}
    </>
  );
};

export default Modal;
