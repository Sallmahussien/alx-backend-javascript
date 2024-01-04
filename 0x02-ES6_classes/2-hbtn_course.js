export default class HolbertonCourse {
  constructor(name, length, students) {
    this.validateString(name);
    this.validateNumber(length);
    this.validateArrayOfStrings(students);

    this._name = name;
    this._length = length;
    this._students = students;
  }

  // Disable 'class-methods-use-this' for utility methods
  // eslint-disable-next-line class-methods-use-this
  validateString(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
  }

  // Disable 'class-methods-use-this' for utility methods
  // eslint-disable-next-line class-methods-use-this
  validateNumber(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
  }

  validateArrayOfStrings(value) {
    this.validateArray(value);
    if (!value.every((item) => typeof item === 'string')) {
      throw new TypeError('All elements in students must be strings');
    }
  }

  // Disable 'class-methods-use-this' for utility methods
  // eslint-disable-next-line class-methods-use-this
  validateArray(value) {
    if (!Array.isArray(value)) {
      throw new TypeError('Students must be an array');
    }
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this.validateString(newName);
    this._name = newName;
  }

  get length() {
    return this._length;
  }

  set length(newLength) {
    this.validateNumber(newLength);
    this._length = newLength;
  }

  get students() {
    return this._students;
  }

  set students(newStudents) {
    this.validateArrayOfStrings(newStudents);
    this._students = newStudents;
  }
}
