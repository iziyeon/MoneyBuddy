export const EMAIL_REGEX = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

export const COMMA_NUMBER_FORMAT = (value: number): string =>
  value.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');

export const formatPhoneNumber = (value: string): string => {
  const onlyNumbers = value.replace(/\D/g, '');
  if (onlyNumbers.length < 4) return onlyNumbers;
  if (onlyNumbers.length < 7)
    return `${onlyNumbers.slice(0, 3)}-${onlyNumbers.slice(3)}`;
  if (onlyNumbers.length < 11)
    return `${onlyNumbers.slice(0, 3)}-${onlyNumbers.slice(3, 6)}-${onlyNumbers.slice(6)}`;
  return `${onlyNumbers.slice(0, 3)}-${onlyNumbers.slice(3, 7)}-${onlyNumbers.slice(7, 11)}`;
};
