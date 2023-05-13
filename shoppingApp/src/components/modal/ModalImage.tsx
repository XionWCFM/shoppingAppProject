import BookMarkStar from '../../icons/BookMarkStar';
import { starActiveColor } from '../../colors/colors';
import Delete from '../../icons/Delete';
const ModalImageWidth = '46.5rem';
const ModalImageHeight = '30rem';

interface Props {
  src?: string | undefined;
  title?: string | undefined;
}

const ModalImage = ({ src, title = '로딩 중입니다' }: Props) => {
  return (
    <figure className="fixed bottom-0 left-0 right-0 top-0 z-50 flex items-center justify-center">
      <div className={`relative h-[30rem] w-[46.5rem]`}>
        <div className=" absolute right-[2.875rem] top-[3.125rem] cursor-pointer">
          <Delete />
        </div>
        <img
          className={`h-[${ModalImageHeight}] w-[${ModalImageWidth}]`}
          src={src}
          width={ModalImageWidth}
          height={ModalImageHeight}
        />
        <div className="absolute bottom-[3.125rem] left-[3.375rem]">
          <div className=" flex">
            <BookMarkStar className=" cursor-pointer" fill={starActiveColor} />
            <span className=" px-2 text-xl font-bold text-white">{title}</span>
          </div>
        </div>
      </div>
    </figure>
  );
};

export default ModalImage;
export { ModalImageWidth, ModalImageHeight };
