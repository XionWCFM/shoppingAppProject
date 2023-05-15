import { createPortal } from 'react-dom';
import BookMarkStar from '../../icons/BookMarkStar';
import { TiDeleteOutline } from 'react-icons/ti';
import { CozApiInterface } from '../../modules/cozShoppingAPI';
import { starActiveColor, starNonActiveColor } from '../../colors/colors';
import { Dispatch, SetStateAction } from 'react';

interface ToastProps {
  data: CozApiInterface;
  setShowToast: Dispatch<SetStateAction<boolean>>;
}

const Toast = ({ data, setShowToast }: ToastProps) => {
  const toastElement = document.getElementById('toast') as HTMLElement;
  const { bookmark } = data;
  return (
    <>
      {createPortal(
        <>
          <li className=" fcc my-3 rounded-lg bg-red-500 px-6 py-5 text-white">
            <BookMarkStar
              fill={bookmark ? starActiveColor : starNonActiveColor}
            />
            {data.bookmark ? (
              <span className=" mx-2">상품이 북마크에 추가되었습니다.</span>
            ) : (
              <span className=" mx-2">상품이 북마크에서 제거되었습니다.</span>
            )}

            <TiDeleteOutline
              className="  h-[2rem] w-[2rem] cursor-pointer"
              onClick={() => setShowToast(false)}
            />
          </li>
        </>,
        toastElement,
      )}
    </>
  );
};

export default Toast;
