export type TextFieldProps = {
  placeholder: string;
  value: string;
  onValueChange: (value: string) => void;
  label?: string;
  description?: string;
  counter?: string;
  onCorrect: (value: string) => boolean;
  errorText?: string;
  showError?: boolean;
  isActive?: boolean;
  className?: string;
};
