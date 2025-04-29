import { ReactNode } from "react";

interface GridCardWrapperProps {
  children: ReactNode;
  className?: string;
}

export default function GridCardWrapper({
  children,
  className,
}: GridCardWrapperProps) {
  return (
    <div className="w-full">
      <div className={`${className || ""}`}>{children}</div>
    </div>
  );
}
