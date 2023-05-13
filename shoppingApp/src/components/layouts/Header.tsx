import { useRef } from 'react';
import { Link } from 'react-router-dom';
import useDropdown from '../../hooks/useDropdown';
import Hamburger from '../../icons/Hamburger';
import Logo from '../../icons/Logo';
import Dropdown from '../dropdown/Dropdown';
import DarkToggleButton from '../DarkToggleButton';
import { useSelector } from 'react-redux';
import { RootState } from '../../modules';
const Header = () => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { isOpen, setIsOpen } = useDropdown<HTMLDivElement>({
    ref: dropdownRef,
    initialState: false,
  });

  const handleHamburgerClick = () => {
    setIsOpen(!isOpen);
  };

  const darkState = useSelector((state: RootState) => state.dark.isDark);

  return (
    <header className="lightmode darkmode sticky top-0 z-30 shadow-md">
      <div className="flex items-center justify-between px-[4.875rem] py-[1rem] text-center">
        <Link to="/" className="text-lightfont">
          <div className="fcc">
            <Logo />
            <span className=" ml-3 text-2xl text-slate-800 dark:text-slate-200">
              COZ Shopping
            </span>
          </div>
        </Link>
        <div className="fcc">
          <DarkToggleButton />
          <div className="relative ml-10" ref={dropdownRef}>
            <button
              className="focus:outline-none"
              onClick={handleHamburgerClick}
            >
              <Hamburger stroke={darkState ? 'white' : 'black'} />
            </button>
            {isOpen && <Dropdown />}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
