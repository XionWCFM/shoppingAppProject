import { useRef } from 'react';
import { Link } from 'react-router-dom';
import useDropdown from '../../hooks/useDropdown';
import Hamburger from '../../icons/Hamburger';
import Logo from '../../icons/Logo';
import Dropdown from '../dropdown/Dropdown';
import DarkToggleButton from '../DarkToggleButton';
const Header = () => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { isOpen, setIsOpen } = useDropdown<HTMLDivElement>({
    ref: dropdownRef,
    initialState: false,
  });

  const handleHamburgerClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="lightmode darkmode sticky top-0 shadow-md">
      <div className="flex items-center justify-between px-[4.875rem] py-[1rem] text-center">
        <Link to="/" className="text-lightfont">
          <div className="fcc">
            <Logo />
            <span className=" ml-3 text-2xl">COZ Shopping</span>
          </div>
        </Link>
        <div className="fcc">
          <DarkToggleButton />
          <div className="relative ml-10" ref={dropdownRef}>
            <button
              className="focus:outline-none"
              onClick={handleHamburgerClick}
            >
              <Hamburger />
            </button>
            {isOpen && <Dropdown />}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
