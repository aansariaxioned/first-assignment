import React, { ReactNode } from "react";

interface GridListWrapperProps {
  children: ReactNode;
}

const GridListWrapper: React.FC<GridListWrapperProps> = ({ children }) => {
  return <div className="w-full grid col-span-full">{children}</div>;
};

export default GridListWrapper;
