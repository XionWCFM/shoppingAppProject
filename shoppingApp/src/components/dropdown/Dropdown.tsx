import { Link } from 'react-router-dom';
import Gift from '../../assets/icons/Gift';
import DropdownStar from '../../assets/icons/DropdownStar';

const Dropdown = () => {
  return (
    <div className="absolute right-[-4rem] top-8  mt-2 max-h-[9.375rem] w-[12.5rem] rounded-md bg-white">
      <div className=" flex ">
        <div className="absolute right-[4.125rem] top-[-10px] h-5 w-5 rotate-45 bg-white  "></div>
        <div className=" z-10 w-[12.5rem] rounded-lg shadow-md shadow-slate-300 ">
          <ul className="flex flex-col justify-center">
            <li className="flex border-b border-gray-200 py-3 pl-5 text-slate-800">
              OOO님, 안녕하세요!
            </li>
            <li className="flex border-b border-gray-200 py-3 pl-5">
              <Link to="/products/list" className="lightmode flex">
                <Gift />
                <span className=" pl-1">상품리스트 페이지</span>
              </Link>
            </li>
            <li className="flex items-center  py-3 pl-5">
              <Link
                to="/bookmark"
                className="lightmode flex items-center text-center"
              >
                <DropdownStar />
                <span className=" pl-1">북마크 페이지</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
