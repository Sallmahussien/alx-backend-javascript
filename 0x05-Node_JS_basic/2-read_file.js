const fs = require('fs');

const createLabelIndexObject = (dataList) => {
  const labelsObj = {};

  const labelsList = dataList[0].split(',');
  labelsList.forEach((label, idx) => {
    labelsObj[label] = idx;
  });

  return labelsObj;
};

const createStudentsByField = (labelsObj, dataList) => {
  const studentsByField = {};

  for (let i = 1; i < dataList.length; i += 1) {
    const studentList = dataList[i].split(',');
    const fieldIdx = labelsObj.field;
    const fieldName = studentList[fieldIdx];
    if (!studentsByField[fieldName]) studentsByField[fieldName] = [];
    const firstNameIdx = labelsObj.firstname;
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
      console.log(`Number of students in ${key}: ${studentsNumber}. ${firstNamesStr}`);
    }
  }
};

const countStudents = (path) => {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    const dataList = data.split('\n');
    const labelsObj = createLabelIndexObject(dataList);
    const studentsByField = createStudentsByField(labelsObj, dataList);

    console.log(`Number of students: ${dataList.length - 1}`);
    printStudentsWithField(studentsByField);
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
