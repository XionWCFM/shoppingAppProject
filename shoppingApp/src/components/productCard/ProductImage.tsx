import BookMarkStar from '../../assets/icons/BookMarkStar';
import { starNonActiveColor, starActiveColor } from '../../colors/colors';
import { ProductType } from '../../modules/ProductApi';
import useBookmark from '../../hooks/useBookmark';
import createToastMessage from '../../utils/createToastMessage';
import { useDispatch } from 'react-redux';
import { showToastAsync } from '../../modules/toastSlice';

interface ProductImageProps {
  src?: string | undefined;
  data: ProductType;
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
          dispatch(showToastAsync(createToastMessage(!data.bookmark)));
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
