import { FC, ReactNode } from "react";

interface IBaseIconButton {
  children: ReactNode;
  [key: string]: any;
}

export const BaseIconButton: FC<IBaseIconButton> = ({ children, ...props }) => {
  return (
    <button
      type="button"
      className="focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2"
      {...props}
    >
      {children}
    </button>
  );
};
