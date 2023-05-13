import BookMarkStar from '../../icons/BookMarkStar';
import { starNonActiveColor, starActiveColor } from '../../colors/colors';
import { imageHeight, imageWidth } from './ImageWH';
interface ProductImageProps {
  src?: string | undefined;
  bookmark?: boolean;
}

const ProductImage = ({ src, bookmark }: ProductImageProps) => {
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
      <BookMarkStar
        className=" absolute bottom-1 right-3 m-3 cursor-pointer"
        fill={bookmark ? starActiveColor : starNonActiveColor}
      />
    </div>
  );
};

export default ProductImage;
