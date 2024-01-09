export const weakMap = new WeakMap();

export const queryAPI = (endpoint) => {
  const queriesNumber = weakMap.get(endpoint) ? weakMap.get(endpoint) + 1 : 1;

  if (queriesNumber >= 5) {
    throw new Error('Endpoint load is high');
  }

  weakMap.set(endpoint, queriesNumber);
};
