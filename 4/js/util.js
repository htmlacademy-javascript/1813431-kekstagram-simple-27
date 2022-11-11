import { createPhoto } from './create-photo.js';

const photoCards = [];
for (let index = 0; index < 25; index++) {
  const object = createPhoto(index);
  photoCards.push(object);
}

export { photoCards };
