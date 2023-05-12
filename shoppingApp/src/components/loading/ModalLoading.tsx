import { ModalImageHeight, ModalImageWidth } from '../modal/ModalImage';
import Delete from '../../icons/Delete';
import spinner from '../../assets/spinner.gif';
const ModalLoading = () => {
  return (
    <div className=" relative h-[30rem] w-[46.5rem] ">
      <div className=" absolute right-[2.875rem] top-[3.125rem] cursor-pointer ">
        <Delete fill="black" />
      </div>
      <div
        className={` w-[${ModalImageWidth}] h-[${ModalImageHeight}] ani rounded-xl bg-slate-300`}
      ></div>
      <div className=" absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
        <img src={spinner} alt="" />
      </div>
    </div>
  );
};

export default ModalLoading;
