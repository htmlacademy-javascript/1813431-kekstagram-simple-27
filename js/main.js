// Функция, возвращающая случайное целое число из переданного диапазона включительно.

const randomNumber = function (minNumber, maxNumber) {
  const number = minNumber + Math.random() * (maxNumber - minNumber);
  return Math.round(number);
};

randomNumber(1, 10);

// Функция для проверки максимальной длины строки.

let message;

const getMaxLength = function (string, maxString) {
  if (string <= maxString) {
    message = 'Строка проходит по длине';
    return message;
  } else {
    message = 'Строка не проходит по длине';
    return message;
  }
};

getMaxLength(1, 5);


