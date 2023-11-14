export type RadioButtonProps = {
  placeholder: string;
  value?: Option;
  onValueChange: (value: Option) => void;
  label?: string;
  description?: string;
  counter?: string;
  errorText?: string;
  showError?: boolean;
  isActive?: boolean;
  options: Option[];
  name: string;
};

export type Option = { id: number; text: string };
