export default class Airport {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof newName !== 'string') {
      throw new TypeError('Name must be string');
    }

    this._name = newName;
  }

  get code() {
    return this._code;
  }

  set code(newCode) {
    if (typeof newCode !== 'string') {
      throw new TypeError('Code must be string');
    }

    this._code = newCode;
  }

  toString() {
    return `[object ${this._code}]`;
  }
}
