import BookMarkStar from '../../icons/BookMarkStar';
import { starActiveColor, starNonActiveColor } from '../../colors/colors';
import Delete from '../../icons/Delete';
import ModalProps from '../../types/ModalProps';
import useBookmark from '../../hooks/useBookmark';
import React from 'react';
import { showToastAsync } from '../../modules/toastSlice';
import { useDispatch } from 'react-redux';
import createToastMessage from '../../utils/createToastMessage';

const ModalImageWidth = '46.5rem';
const ModalImageHeight = '30rem';

const ModalImage = ({ data, src, title, setIsOpen }: ModalProps) => {
  const bookMarkHandler = useBookmark();
  const dispatch = useDispatch();

  return (
    <figure className="fixed bottom-0 left-0 right-0 top-0 z-20 flex items-center justify-center ">
      <div className={`relative h-[30rem] w-[46.5rem]`}>
        <button
          onClick={(event: React.MouseEvent) => {
            console.log(event);
            setIsOpen((state) => !state);
          }}
          className=" absolute right-[2.875rem] top-[3.125rem] cursor-pointer"
        >
          <Delete />
        </button>
        <img
          className={`rounded-3xl shadow-md shadow-slate-400 h-[${ModalImageHeight}] w-[${ModalImageWidth}]`}
          src={src}
          width={ModalImageWidth}
          height={ModalImageHeight}
        />
        <div className="absolute bottom-[3.125rem] left-[3.375rem]">
          <div className=" flex">
            <button
              onClick={() => {
                bookMarkHandler(data);
                dispatch(showToastAsync(createToastMessage(!data.bookmark)));
              }}
            >
              <BookMarkStar
                className=" cursor-pointer"
                fill={data.bookmark ? starActiveColor : starNonActiveColor}
              />
            </button>
            <span className=" px-2 text-xl font-bold text-white">{title}</span>
          </div>
        </div>
      </div>
    </figure>
  );
};

export default ModalImage;
export { ModalImageWidth, ModalImageHeight };
