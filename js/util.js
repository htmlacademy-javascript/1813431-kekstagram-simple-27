function randomNumber (minNumber, maxNumber) {
  if (minNumber < 0 || maxNumber < 0 || minNumber >= maxNumber) {
    return NaN;
  }

  const number = minNumber + Math.random() * (maxNumber - minNumber);
  return Math.round(number);
}

function checkMaxLength(string, maxString) {
  if (typeof string === 'string' && string.length <= maxString) {
    return true;
  } else {
    return false;
  }
}

export {randomNumber, checkMaxLength };
