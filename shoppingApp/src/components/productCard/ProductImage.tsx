import BookMarkStar from '../../icons/BookMarkStar';
import { starNonActiveColor, starActiveColor } from '../../colors/colors';
import { CozApiInterface } from '../../modules/cozShoppingAPI';
import useBookmark from '../../hooks/useBookmark';
import Toast from '../toast/Toast';
import useToastFlip from '../../hooks/useToastFlip';
interface ProductImageProps {
  src?: string | undefined;
  data: CozApiInterface;
}

const ProductImage = ({ src, data }: ProductImageProps) => {
  const bookMarkHandler = useBookmark();
  const [toastShow, setShowToast] = useToastFlip();

  return (
    <div className={` relative mb-3 flex`}>
      {toastShow && <Toast setShowToast={setShowToast} data={data} />}
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
          setShowToast(true);
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
