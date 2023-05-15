import { createPortal } from 'react-dom';
import useToastFlip from '../../hooks/useToastFlip';
import BookMarkStar from '../../icons/BookMarkStar';
import { TiDeleteOutline } from 'react-icons/ti';
import { CozApiInterface } from '../../modules/cozShoppingAPI';
import { starActiveColor, starNonActiveColor } from '../../colors/colors';
interface ToastProps {
  data: CozApiInterface;
}

const Toast = ({ data }: ToastProps) => {
  const toastElement = document.getElementById('toast') as HTMLElement;
  const [showToast, setShowToast] = useToastFlip();
  const { bookmark } = data;
  console.log(bookmark);
  return (
    <>
      {createPortal(
        <>
          {showToast && (
            <li className=" fcc my-3 rounded-lg bg-red-500 px-6 py-5 text-white">
              <BookMarkStar
                fill={bookmark ? starActiveColor : starNonActiveColor}
              />
              <span className=" mx-2">상품이 북마크에 추가되었습니다.</span>
              <TiDeleteOutline
                className="  h-[2rem] w-[2rem] cursor-pointer"
                onClick={() => setShowToast(false)}
              />
            </li>
          )}
        </>,
        toastElement,
      )}
    </>
  );
};

export default Toast;
