import { ReactNode } from "react";

export type ButtonProps = {
  children: ReactNode | ReactNode[];
  className?: string;
  onClick?: () => void;
};
