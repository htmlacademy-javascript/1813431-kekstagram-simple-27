// Функция, возвращающая случайное целое число из переданного диапазона включительно.

function randomNumber (minNumber, maxNumber) {
  if (minNumber < 0 || maxNumber < 0 || minNumber >= maxNumber) {
    return NaN;
  }

  const number = minNumber + Math.random() * (maxNumber - minNumber);
  return Math.round(number);
}

randomNumber(2, 10);

// Функция для проверки максимальной длины строки.

function checkMaxLength (string, maxString) {
  if (typeof string === 'string' && string.length <= maxString) {
    return true;
  } else {
    return false;
  }
}

checkMaxLength('строка', 10);


