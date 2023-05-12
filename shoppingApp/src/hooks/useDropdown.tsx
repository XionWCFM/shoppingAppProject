import React, { useState, useEffect, RefObject } from 'react';

export interface UseDropDown<T extends HTMLElement> {
  ref: RefObject<T>;
  initialState: boolean;
}

export interface UseDropDownReturn {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const useDropdown = <T extends HTMLElement>({
  ref,
  initialState,
}: UseDropDown<T>): UseDropDownReturn => {
  const [isOpen, setIsOpen] = useState(initialState);

  useEffect(() => {
    const pageClickEvent = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      window.addEventListener('click', pageClickEvent);
    }

    return () => {
      window.removeEventListener('click', pageClickEvent);
    };
  }, [isOpen, ref]);

  return { isOpen, setIsOpen };
};

export default useDropdown;
