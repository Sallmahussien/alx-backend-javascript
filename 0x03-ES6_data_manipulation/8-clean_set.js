const cleanSet = (set, startString) => [...set]
  .filter((element) => element.startsWith(startString) && startString !== '')
  .map((element) => element.replace(startString, ''))
  .join('-');

export default cleanSet;
