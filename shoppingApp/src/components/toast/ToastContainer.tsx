import { hideToast } from '../../modules/toastSlice';
import { RootState } from '../../modules';
import { starActiveColor, starNonActiveColor } from '../../colors/colors';

import { TiDeleteOutline } from 'react-icons/ti';
import { createPortal } from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';

import BookMarkStar from '../../assets/icons/BookMarkStar';

const ToastContainer = () => {
  const messages = useSelector((state: RootState) => state.toast.messages);
  const dispatch = useDispatch();
  const toastElement = document.getElementById('toast') as HTMLElement;
  return (
    <>
      {createPortal(
        messages.map((message) => (
          <li
            key={message.id}
            className="fcc my-3 rounded-lg bg-red-500 px-6 py-5 text-white"
          >
            <BookMarkStar
              fill={message.bookmark ? starActiveColor : starNonActiveColor}
            />
            <p className=" mx-2">{message.content}</p>
            <TiDeleteOutline
              className="  h-[2rem] w-[2rem] cursor-pointer"
              onClick={() => dispatch(hideToast(message.id))}
            />
          </li>
        )),
        toastElement,
      )}
    </>
  );
};

export default ToastContainer;
