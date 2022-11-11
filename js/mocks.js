import { randomNumber } from './util.js';

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

export { photoCards };
