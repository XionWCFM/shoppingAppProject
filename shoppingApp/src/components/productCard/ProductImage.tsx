import BookMarkStar from '../../icons/BookMarkStar';
import { starNonActiveColor, starActiveColor } from '../../colors/colors';
import { CozApiInterface } from '../../modules/cozShoppingAPI';
import useBookmark from '../../hooks/useBookmark';
import createToastMessage from '../../utils/createToastMessage';
import { useDispatch } from 'react-redux';
import { showToast } from '../../modules/toastSlice';

interface ProductImageProps {
  src?: string | undefined;
  data: CozApiInterface;
}

const ProductImage = ({ src, data }: ProductImageProps) => {
  const bookMarkHandler = useBookmark();
  const dispatch = useDispatch();
  return (
    <div className={` relative mb-3 flex`}>
      <div className={` rounded-2xl `}>
        <img
          src={src}
          alt="상품이미지입니다."
          className=" relative h-[210px] w-[264px]  rounded-2xl shadow-md shadow-slate-400 "
        ></img>
      </div>
      <button
        className="absolute bottom-1 right-3 m-3 cursor-pointer"
        onClick={() => {
          bookMarkHandler(data);
          dispatch(showToast(createToastMessage(!data.bookmark)));
        }}
      >
        <BookMarkStar
          className=" "
          fill={data.bookmark ? starActiveColor : starNonActiveColor}
        />
      </button>
    </div>
  );
};

export default ProductImage;
