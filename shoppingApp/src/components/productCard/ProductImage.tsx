import BookMarkStar from '../../icons/BookMarkStar';
import { starNonActiveColor, starActiveColor } from '../../colors/colors';
import { imageHeight, imageWidth } from './ImageWH';
import { CozApiInterface } from '../../modules/cozShoppingAPI';
import useBookmark from '../../hooks/useBookmark';

interface ProductImageProps {
  src?: string | undefined;
  bookmark?: boolean;
  data: CozApiInterface;
}

const ProductImage = ({ src, bookmark, data }: ProductImageProps) => {
  const bookMarkHandler = useBookmark();

  return (
    <div className={`h-[${imageHeight}] w-[${imageWidth}] relative mb-3 flex`}>
      <div
        className={` flex  h-[210px] w-[264px] items-center justify-center rounded-2xl bg-stone-500`}
      >
        <img
          src={src}
          alt="상품이미지입니다."
          className=" relative max-h-[13.125rem] max-w-[16.5rem]  rounded-2xl object-fill"
        ></img>
      </div>
      <button
        className="absolute bottom-1 right-3 m-3 cursor-pointer"
        onClick={() => bookMarkHandler(data)}
      >
        <BookMarkStar
          className=" "
          fill={bookmark ? starActiveColor : starNonActiveColor}
        />
      </button>
    </div>
  );
};

export default ProductImage;
