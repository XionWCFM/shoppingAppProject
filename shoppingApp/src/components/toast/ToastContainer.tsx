import { useSelector, useDispatch } from 'react-redux';
import { hideToast } from '../../modules/toastSlice';
import { RootState } from '../../modules';
import { createPortal } from 'react-dom';
import { starActiveColor, starNonActiveColor } from '../../colors/colors';
import BookMarkStar from '../../assets/icons/BookMarkStar';
import { TiDeleteOutline } from 'react-icons/ti';

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
