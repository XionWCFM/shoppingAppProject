import React from 'react';
import SvgTagProps from '../types/svgTagProps';

const Hamburger = ({ width = 34, height = 24, ...rest }: SvgTagProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M2 22H32M2 12H32M2 2H32"
        stroke="black"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Hamburger;
