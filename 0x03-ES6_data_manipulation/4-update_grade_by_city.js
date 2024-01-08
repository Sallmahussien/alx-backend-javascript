const updateStudentGradeByCity = (students, city, grades) => {
  const idGradeMap = new Map(grades.map((grade) => [grade.studentId, grade.grade]));

  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const grade = idGradeMap.get(student.id) || 'N/A';
      return { ...student, grade };
    });
};

export default updateStudentGradeByCity;
