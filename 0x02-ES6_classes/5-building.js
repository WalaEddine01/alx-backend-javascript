export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    if (this.constructor !== Building && this.evacuationWarningMessage === undefined) {
      throw Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  set sqft(sqft) {
    if (typeof (sqft) === 'number') this._sqft = sqft;
    else throw new TypeError('Sqft must be a number');
  }

  get sqft() {
    return this._sqft;
  }
}
