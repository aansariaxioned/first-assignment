import React, { ReactNode } from "react";

interface GridListWrapperProps {
  children: ReactNode;
}

const GridListWrapper: React.FC<GridListWrapperProps> = ({ children }) => {
  return <div className="w-full col-span-full">{children}</div>;
};

export default GridListWrapper;
