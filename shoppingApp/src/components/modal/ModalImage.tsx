import BookMarkStar from '../../icons/BookMarkStar';
import Modal from './Modal.png';
import { starActiveColor } from '../../colors/colors';
const imageWidth = '46.5rem';
const imageHeight = '30rem';

interface Props {
  src?: string | undefined;
  title?: string | undefined;
}

const ModalImage = ({ src }: Props) => {
  return (
    <figure className="fixed bottom-0 left-0 right-0 top-0 z-50 flex items-center justify-center">
      <div className=" relative h-[30rem] w-[46.5rem]">
        <img
          className={`flex h-[${imageHeight}] w-[${imageWidth}] items-center justify-center`}
          src={src ? src : Modal}
          width={imageWidth}
          height={imageHeight}
        />
        <div className="absolute bottom-[3.125rem] left-[3.375rem]">
          <div className=" flex">
            <BookMarkStar className=" cursor-pointer" fill={starActiveColor} />
            <span className=" px-2 text-xl font-bold text-white">
              안녕하세요
            </span>
          </div>
        </div>
      </div>
    </figure>
  );
};

export default ModalImage;
