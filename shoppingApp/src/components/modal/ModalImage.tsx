import { starActiveColor, starNonActiveColor } from '../../colors/colors';
import { showToastAsync } from '../../modules/thunk/showToastAsync';
import { closeModal } from '../../modules/modalSlice';
import { ProductType, useGetProductQuery } from '../../modules/productApi';
import { RootState } from '../../modules';
import { useDispatch, useSelector } from 'react-redux';

import Loading from '../loading/Loading';
import Error from '../loading/Error';
import Delete from '../../assets/icons/Delete';

import BookMarkStar from '../../assets/icons/BookMarkStar';
import useBookmark from '../../hooks/useBookmark';
import createToastMessage from '../../utils/createToastMessage';
import modalAttributeMatcher from '../../utils/modalAttributeMatcher';

const ModalImageWidth = '46.5rem';
const ModalImageHeight = '30rem';

const ModalImage = () => {
  const { data, isLoading, isError } = useGetProductQuery(undefined);
  const bookMarkHandler = useBookmark();
  const dispatch = useDispatch();
  const modalProduct = useSelector((state: RootState) => state.modal.product);
  const findModalIndex = data.findIndex(
    (product: ProductType) => product.id === modalProduct.id,
  );
  const modalAttribute = modalAttributeMatcher(modalProduct);

  if (isLoading) return <Loading />;
  if (isError || !data) return <Error />;

  return (
    <figure className="fixed bottom-0 left-0 right-0 top-0 z-20 flex items-center justify-center ">
      <div className={`relative h-[30rem] w-[46.5rem]`}>
        <button
          className=" absolute right-[2.875rem] top-[3.125rem] cursor-pointer"
          onClick={() => dispatch(closeModal())}
        >
          <Delete />
        </button>
        <img
          className={`rounded-3xl shadow-md shadow-slate-400 h-[${ModalImageHeight}] w-[${ModalImageWidth}]`}
          src={modalAttribute.src}
          width={ModalImageWidth}
          height={ModalImageHeight}
        />
        <div className="absolute bottom-[3.125rem] left-[3.375rem]">
          <div className=" flex">
            <button
              onClick={() => {
                bookMarkHandler(data[findModalIndex]);
                dispatch(
                  showToastAsync(
                    createToastMessage(!data[findModalIndex].bookmark),
                  ),
                );
              }}
            >
              <BookMarkStar
                className=" cursor-pointer"
                fill={
                  data[findModalIndex].bookmark
                    ? starActiveColor
                    : starNonActiveColor
                }
              />
            </button>
            <span className=" px-2 text-xl font-bold text-white">
              {modalAttribute.title}
            </span>
          </div>
        </div>
      </div>
    </figure>
  );
};

export default ModalImage;
export { ModalImageWidth, ModalImageHeight };
