import { useEffect, useState, Dispatch, SetStateAction } from 'react';

export type UseToastType = [boolean, Dispatch<SetStateAction<boolean>>];

const useToastFlip = (): UseToastType => {
  const [toastShow, setShowToast] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  }, [toastShow]);

  return [toastShow, setShowToast];
};

export default useToastFlip;
