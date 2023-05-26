import { cva, VariantProps } from 'class-variance-authority';
import { HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

const FooterVariants = cva(
  'py-3 text-xs text-lightgray border-lightgray border-t flex justify-center items-center flex-col',
  {
    variants: {
      variant: {
        primary: '',
        secondary: '',
      },
      weight: {
        default: ' font-thin',
        sm: 'font-normal',
        lg: 'font-extrabold',
      },
    },
    defaultVariants: {
      variant: 'primary',
      weight: 'default',
    },
  },
);

export interface FooterProps
  extends HTMLAttributes<HTMLElement>,
    VariantProps<typeof FooterVariants> {}

const Footer = ({ variant, weight }: FooterProps) => {
  return (
    // <footer className="fcc flex-col border-t border-lightgray py-3 text-xs font-thin text-lightgray">
    <footer
      className={cn(FooterVariants({ variant: variant, weight: weight }))}
    >
      <div className=" flex items-center justify-center text-center">
        <span>개인정보 처리방침</span>
        <span>이용약관</span>
      </div>
      <p>All rights reserved @ Codestates</p>
    </footer>
  );
};

export default Footer;
