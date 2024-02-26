const fs = require('fs');

const createStudentsByField = (dataList) => {
  const labelsList = dataList[0].split(',');
  const fieldIdx = labelsList.indexOf('field');
  const firstNameIdx = labelsList.indexOf('firstname');

  const studentsByField = {};

  for (let i = 1; i < dataList.length; i += 1) {
    const studentList = dataList[i].split(',');
    const fieldName = studentList[fieldIdx];
    if (!studentsByField[fieldName]) studentsByField[fieldName] = [];
    studentsByField[fieldName].push(studentList[firstNameIdx]);
  }

  return studentsByField;
};

const printStudentsWithField = (studentsByField) => {
  for (const key in studentsByField) {
    if (Object.prototype.hasOwnProperty.call(studentsByField, key)) {
      const firstNamesList = studentsByField[key];
      const studentsNumber = firstNamesList.length;
      const firstNamesStr = firstNamesList.join(', ');
      console.log(`Number of students in ${key}: ${studentsNumber}. List: ${firstNamesStr}`);
    }
  }
};

const countStudents = (path) => {
  let data;
  try {
    data = fs.readFileSync(path, 'utf-8');
  } catch (error) {
    throw new Error('Cannot load the database');
  }

  const dataList = data.split('\n');
  const studentsByField = createStudentsByField(dataList);

  console.log(`Number of students: ${dataList.length - 1}`);
  printStudentsWithField(studentsByField);
};

module.exports = countStudents;
