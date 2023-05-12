import BookMarkStar from '../../icons/BookMarkStar';

const imageWidth = 16.5;
const imageHeight = 13.125;

interface ProductImageProps {
  src?: string | undefined;
  width?: string | number;
  height?: string | number;
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
          <div className=" h-[13.125rem] w-[16.5rem] bg-red-300">
            이미지 로딩에 실패했습니다.
          </div>
        )}
        <BookMarkStar className=" absolute bottom-0 right-0 m-3 cursor-pointer" />
        {/* 로딩 로직 완성 후엔 조건문 안으로 넣을것 */}
      </div>
    </figure>
  );
};

export default ProductImage;
