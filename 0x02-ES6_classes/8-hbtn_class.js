export default class HolbertonClass {
  constructor(size, location) {
    if (size === 'number' && location === 'string') {
      this._size = size;
      this._location = location;
    } else {
      throw new Error('Attributes size and location must be numbers');
    }
  }

  get size() {
    return this._size;
  }

  get location() {
    return this._location;
  }

  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return this._size;
    }
    if (hint === 'string') {
      return this._location;
    }
    return null;
  }
}
