import { useSelector, useDispatch } from 'react-redux';
import { hideToast } from '../../modules/toastSlice';
import { useEffect } from 'react';
import { RootState } from '../../modules';
import { createPortal } from 'react-dom';

const ToastContainer = () => {
  const messages = useSelector((state: RootState) => state.toast.messages);
  const dispatch = useDispatch();
  const toastElement = document.getElementById('toast') as HTMLElement;

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    messages.forEach((message) => {
      const timer = setTimeout(() => {
        dispatch(hideToast(message.id));
      }, 2000);
      timers.push(timer);
    });

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, [dispatch, messages]);

  return (
    <>
      {createPortal(
        messages.map((message) => (
          <div
            key={message.id}
            className={message.isVisible ? '' : ' invisible'}
            onClick={() => dispatch(hideToast(message.id))}
          >
            {message.content}
          </div>
        )),
        toastElement,
      )}
    </>
  );
};

export default ToastContainer;
