const hasValuesFromArray = (set, array) => {
  const boolArray = array.map((ele) => set.has(ele));

  return boolArray.reduce((total, ele) => total && ele);
};

export default hasValuesFromArray;
