import { useEffect, useState, Dispatch, SetStateAction } from 'react';

export type ToastFlipHookInterface = [
  boolean,
  Dispatch<SetStateAction<boolean>>,
];

const useToastFlip = (setTime = 3000): ToastFlipHookInterface => {
  const [toastShow, setToastShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setToastShow(false);
    }, setTime);

    return () => {
      clearTimeout(timer);
    };
  }, [setTime]);

  return [toastShow, setToastShow];
};

export default useToastFlip;
