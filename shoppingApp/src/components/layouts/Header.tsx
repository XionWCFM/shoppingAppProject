import { useState } from 'react';
import { Link } from 'react-router-dom';
import Hamburger from '../../assets/icons/Hamburger';
import Logo from '../../assets/icons/Logo';
import Dropdown from '../dropdown/Dropdown';
import DarkToggleButton from '../DarkToggleButton';
import { useSelector } from 'react-redux';
import { RootState } from '../../modules';
const Header = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const darkState = useSelector((state: RootState) => state.dark.isDark);

  return (
    <header className="lightmode darkmode sticky top-0 z-30 shadow-md">
      <div className="flex items-center justify-between px-[4.875rem] py-[1rem] text-center">
        <Link to="/" className="text-lightfont">
          <div className="fcc">
            <Logo />
            <span className=" invisible ml-3 text-xs text-slate-800 dark:text-slate-200 md:visible md:text-2xl ">
              COZ Shopping
            </span>
          </div>
        </Link>
        <div className="fcc">
          <DarkToggleButton />
          <div className="relative ml-10">
            <button
              className="focus:outline-none"
              onClick={() => setIsDropDownOpen((state) => !state)}
            >
              <Hamburger stroke={darkState ? 'white' : 'black'} />
            </button>
            {isDropDownOpen && <Dropdown />}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
