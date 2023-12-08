import { FC } from "react";
import { ButtonTypes, IBaseButtonProps } from "./types";

export const BaseButton: FC<IBaseButtonProps> = ({
  onClick,
  children,
  type = "primary",
}) => {
  const buttonClassNames: { [key in ButtonTypes]: string } = {
    error: "bg-red-500 hover:bg-red-600 text-white",
    primary: "bg-primary hover:bg-primary-700 text-white",
  };

  return (
    <button
      onClick={onClick}
      className={`font-bold py-2 px-4 rounded ${buttonClassNames[type]}`}
    >
      {children}
    </button>
  );
};
