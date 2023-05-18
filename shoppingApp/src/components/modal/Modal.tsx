import { createPortal } from 'react-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../modules';

interface ModalContainerProp {
  children: React.ReactElement;
}

const portalElement = document.getElementById('modal') as HTMLElement;

const Modal = ({ children }: ModalContainerProp) => {
  const isModalOpen = useSelector((state: RootState) => state.modal.isOpen);
  return <>{isModalOpen && createPortal(children, portalElement)}</>;
};

export default Modal;
