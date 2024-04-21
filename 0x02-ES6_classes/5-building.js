export default class Building {
  constructor(sqft) {
    if (typeof (sqft) === 'number') this._sqft = sqft;
    else throw new TypeError('Sqft must be a number');
  }

  set sqft(sqft) {
    if (typeof (sqft) === 'number') this._sqft = sqft;
    else throw new TypeError('Sqft must be a number');
  }

  get sqft() {
    return this._sqft;
  }

  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
