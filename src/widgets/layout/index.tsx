import React, { FC } from 'react';

interface IProps {
  children: React.ReactNode;
}
export const Layout: FC<IProps> = ({ children }) => {
  return (
      <div>
        <div >{children}</div>
      </div>
  );
};
