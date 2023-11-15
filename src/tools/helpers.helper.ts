export const getRandomId = (min?: number, max?: number): number =>
  Math.floor(Math.random() * (max || 100 - (min || 1) + 1)) + (min || 1) * Date.now();

export const getElementValueById = (id: string): string | undefined => {
  const element = document.getElementById(id);
  if (!element) {
    return;
  }

  return (element as HTMLInputElement).value;
};

export const isValidEmail = (
  email: string,
  emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
): boolean => emailRegex.test(email);

export const hasOnlyPersian = (str: string, strRegex = /^[\u0600-\u06FF\s]+$/): boolean => strRegex.test(str);

export const isValidPassword = (
  password: string,
  passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d#$@!%&*?]{4,10}$/,
): boolean => passwordRegex.test(password);

export const isValidPhoneNumber = (phoneNumber: string, phoneNumberRegex = /^09[0|1|2|3][0-9]{8}$/): boolean =>
  phoneNumberRegex.test(phoneNumber);

export const isValidName = (name: string): boolean => name.length >= 3;

export const isEmptyString = (str: string): boolean => str.length < 1;
