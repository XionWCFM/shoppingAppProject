import BookMarkStar from '../../icons/BookMarkStar';
import { starNonActiveColor, starActiveColor } from '../../colors/colors';
import { CozApiInterface } from '../../modules/cozShoppingAPI';
import useBookmark from '../../hooks/useBookmark';
import Toast from '../toast/Toast';
interface ProductImageProps {
  src?: string | undefined;
  data: CozApiInterface;
}

const ProductImage = ({ src, data }: ProductImageProps) => {
  const bookMarkHandler = useBookmark();

  return (
    <div className={` relative mb-3 flex`}>
      <Toast data={data} />
      <div className={` rounded-2xl `}>
        <img
          src={src}
          alt="상품이미지입니다."
          className=" relative h-[210px] w-[264px]  rounded-2xl "
        ></img>
      </div>
      <button
        className="absolute bottom-1 right-3 m-3 cursor-pointer"
        onClick={() => bookMarkHandler(data)}
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
