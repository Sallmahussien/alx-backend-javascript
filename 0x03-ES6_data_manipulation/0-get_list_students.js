const createObj = (id, firstName, location) => ({ id, firstName, location });

const getListStudents = () => [
  createObj(1, 'Guillaume', 'Francisco'),
  createObj(2, 'James', 'Columbia'),
  createObj(5, 'Serena', 'San Francisco'),
];

export default getListStudents;
