import { ReactElement } from 'react';

interface Props {
  children: ReactElement;
}

const MainContainer = ({ children }: Props) => {
  return (
    <main className=" flex flex-col items-center justify-center px-[4.875rem] pb-[1.688rem] pt-[4.875rem]">
      {children}
    </main>
  );
};

export default MainContainer;
