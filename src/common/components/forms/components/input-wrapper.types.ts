import { ReactNode } from "react";

export type InputWrapperProps = {
  placeholder: string;
  value: string;
  label?: string;
  description?: string;
  counter?: string;
  errorText?: string;
  showError?: boolean;
  isActive?: boolean;
  className?: string;
  children: ReactNode;
  hovered: boolean;
  iconClicked?: () => void;
  onHovered: () => void;
  onHoveredCancelled: () => void;
  inputId: string;
  typing?: boolean;
  onFocus: () => void;
  onFocusCancelled: () => void;
  isTextArea?: boolean;
  open?: boolean;
  isRadioButton?: boolean;
};
