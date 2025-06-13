export const formatCurrency = (value: number): string => {
  return value.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
};

export const formatPhoneNumber = (value: string): string => {
  const onlyNumbers = value.replace(/\D/g, '');

  if (onlyNumbers.length < 4) return onlyNumbers;
  if (onlyNumbers.length < 7) {
    return `${onlyNumbers.slice(0, 3)}-${onlyNumbers.slice(3)}`;
  }
  if (onlyNumbers.length < 11) {
    return `${onlyNumbers.slice(0, 3)}-${onlyNumbers.slice(3, 6)}-${onlyNumbers.slice(6)}`;
  }

  return `${onlyNumbers.slice(0, 3)}-${onlyNumbers.slice(3, 7)}-${onlyNumbers.slice(7, 11)}`;
};

export const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString('ko-KR');
};

export const truncateText = (text: string, maxLength: number): string => {
  return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
};

// 기존 COMMA_NUMBER_FORMAT과의 호환성
export const COMMA_NUMBER_FORMAT = formatCurrency;
