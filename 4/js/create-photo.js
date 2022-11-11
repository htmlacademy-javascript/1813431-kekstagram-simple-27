import { randomNumber } from './random-number.js';
import {getDescription } from './get-description.js';


function createPhoto(index) {
  return {
    id: index,
    url: `photos/ ${index} .jpg`,
    description: getDescription(),
    likes: randomNumber(15, 200),
    comments: randomNumber(0, 200)
  };
}

export { createPhoto };
