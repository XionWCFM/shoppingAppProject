import BookMarkStar from '../../icons/BookMarkStar';
import { imageHeight, imageWidth } from './ImageWH';

interface ProductImageProps {
  src?: string | undefined;
  width?: string;
  height?: string;
}

const ProductImage = ({
  src,
  width = imageWidth,
  height = imageHeight,
}: ProductImageProps) => {
  return (
    <figure className="flex">
      <div className=" relative">
        {src ? (
          <img src={src} alt="" width={width} height={height} />
        ) : (
          <div className=" h-[13.125rem] w-[16.5rem] rounded-xl bg-red-300"></div>
        )}
        <BookMarkStar className=" absolute bottom-0 right-0 m-3 cursor-pointer" />
        {/* 로딩 로직 완성 후엔 조건문 안으로 넣을것 */}
      </div>
    </figure>
  );
};

export default ProductImage;
