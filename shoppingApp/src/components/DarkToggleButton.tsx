import { BsSun, BsMoonStars } from 'react-icons/bs';
import useDarkMode, { useDark } from '../hooks/useDarkMode';

const DarkToggleButton = () => {
  const [dark, setDark]: useDark = useDarkMode();

  return (
    <button
      className="dark:text-darkColor lightmode darkmode"
      onClick={() => setDark()}
    >
      {dark ? (
        <BsSun className="h-[2rem] w-[2rem]" />
      ) : (
        <BsMoonStars className="h-[2rem] w-[2rem]" />
      )}
    </button>
  );
};

export default DarkToggleButton;
