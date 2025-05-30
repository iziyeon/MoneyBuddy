export const EMAIL_REGEX = /^\S+@\S+$/i;

export const COMMA_NUMBER_FORMAT = (value: number): string =>
  value.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
