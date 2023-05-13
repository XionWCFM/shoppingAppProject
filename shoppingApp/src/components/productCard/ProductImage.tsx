import BookMarkStar from '../../icons/BookMarkStar';
import { starNonActiveColor, starActiveColor } from '../../colors/colors';
import { imageHeight, imageWidth } from './ImageWH';
interface ProductImageProps {
  src?: string | undefined;
  bookmark?: boolean;
}

const ProductImage = ({ src, bookmark }: ProductImageProps) => {
  return (
    <figure className="mb-3 flex">
      <div
        className={`h-[${imageHeight}] w-[${imageWidth}] flex items-center justify-center rounded-xl bg-slate-300 dark:bg-slate-800`}
      >
        {src ? (
          <img
            src={src}
            alt=""
            className={`rounded-xl w-${imageWidth} h-[${imageHeight}] object-fill `}
          />
        ) : (
          <div className=" h-[13.125rem] w-[16.5rem] animate-pulse rounded-xl bg-gray-300"></div>
        )}
        <BookMarkStar
          className=" absolute bottom-0 right-0 m-3 cursor-pointer"
          fill={bookmark ? starActiveColor : starNonActiveColor}
        />
        {/* 로딩 로직 완성 후엔 조건문 안으로 넣을것 */}
      </div>
    </figure>
  );
};

export default ProductImage;
