const cleanSet = (set, startString) => {
  if (startString === '' || typeof startString !== 'string') {
    return '';
  }

  return [...set]
    .filter((element) => typeof element === 'string' && element.startsWith(startString))
    .map((element) => element.replace(startString, ''))
    .join('-');
};

export default cleanSet;
