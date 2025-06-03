export const EMAIL_REGEX = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
export const COMMA_NUMBER_FORMAT = (value: number): string =>
  value.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
