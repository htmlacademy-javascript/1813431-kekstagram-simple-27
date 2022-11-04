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

const descriptionsArray = ['Описание 1', 'Описание 2', 'Описание 3', 'Описание 4', 'Описание 5', ''];
const getDescription = function () {
  const descriptionIndex = Math.round(0 + Math.random() * ((descriptionsArray.length - 1) - 0));
  return descriptionsArray[descriptionIndex];
};

function createPhoto(index) {
  return {
    id: index,
    url: `photos/ ${index} .jpg`,
    description: getDescription(),
    likes: randomNumber(15, 200),
    comments: randomNumber(0, 200)
  };
}

const photoCards = [];

for (let index = 0; index < 25; index++) {
  const object = createPhoto(index);
  photoCards.push(object);
}

window.console.log(photoCards);
