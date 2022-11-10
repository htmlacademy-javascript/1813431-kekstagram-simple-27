const descriptionsArray = ['Описание 1', 'Описание 2', 'Описание 3', 'Описание 4', 'Описание 5', ''];
const getDescription = function () {
  const descriptionIndex = Math.round(0 + Math.random() * ((descriptionsArray.length - 1) - 0));
  return descriptionsArray[descriptionIndex];
};

export { getDescription };
