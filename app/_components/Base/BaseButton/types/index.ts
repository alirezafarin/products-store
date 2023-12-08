import { ReactNode } from "react";

export type ButtonTypes = "primary" | "error";

export interface IBaseButtonProps {
  onClick: () => void;
  children: ReactNode;
  type?: ButtonTypes;
}
