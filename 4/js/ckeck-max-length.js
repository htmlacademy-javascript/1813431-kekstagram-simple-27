function checkMaxLength (string, maxString) {
  if (typeof string === 'string' && string.length <= maxString) {
    return true;
  } else {
    return false;
  }
}

export { checkMaxLength };
