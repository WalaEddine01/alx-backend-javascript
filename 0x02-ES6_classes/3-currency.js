export default class Currency {
  constructor(code, name) {
    if (typeof (code) === 'string') this._code = code;
    else throw new TypeError('Code must be a string');
    if (typeof (name) === 'string') this._name = name;
    else throw new TypeError('Name must be a string');
  }

  set code(code) {
    if (typeof (code) === 'string') this._code = code;
    else throw new TypeError('Code must be a string');
  }

  set name(name) {
    if (typeof (name) === 'string') this._name = name;
    else throw new TypeError('Name must be a string');
  }

  get code() {
    return this._code;
  }

  get name() {
    return this._name;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
