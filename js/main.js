// Функция, возвращающая случайное целое число из переданного диапазона включительно.

function randomNumber (minNumber, maxNumber) {
  if (minNumber < 0 || maxNumber < 0 || minNumber >= maxNumber) {
    return NaN;
  }

  const number = minNumber + Math.random() * (maxNumber - minNumber);
  return Math.round(number);
}

// randomNumber(2, 10);

// Функция для проверки максимальной длины строки.

function checkMaxLength (string, maxString) {
  if (typeof string === 'string' && string.length <= maxString) {
    return true;
  } else {
    return false;
  }
}

checkMaxLength('строка', 10);


// const checkMaxLength = function (string, maxString) {
//   if (typeof string === 'string') {
//     return string.length <= maxString;
//   } else {
//     return 'Введите буквы, а не цифры';
//   }
// };

// checkMaxLength('строка', 10);

//! module4-task1

const createPhoto = () => ({
  id: randomNumber(1, 25),
  url: 'photos/ ' + randomNumber(1, 25) + ' .jpg',
  description: '',
  likes: randomNumber(15, 200),
  comments: randomNumber(0, 200)
});

const photoCards = Array.from({ length: 25 }, createPhoto);

console.log(photoCards);
