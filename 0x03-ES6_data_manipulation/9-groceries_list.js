const createList = (name, quantity) => [name, quantity];

const groceriesList = () => new Map([
  createList('Apples', 10),
  createList('Tomatoes', 10),
  createList('Pasta', 1),
  createList('Rice', 1),
  createList('Banana', 5),
]);

export default groceriesList;
