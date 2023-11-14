export type RadioButtonProps = {
  placeholder: string;
  value: string;
  onValueChange: (value: string) => void;
  label?: string;
  description?: string;
  counter?: string;
  errorText?: string;
  showError?: boolean;
  isActive?: boolean;
  className?: string;
  options: string[];
  name: string;
};
