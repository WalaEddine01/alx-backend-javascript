import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    if (typeof sqft === 'number' && typeof floors === 'number') {
      super(sqft);
      this._floors = floors;
    }
  }

  get floors() {
    return this._floors;
  }

  set floors(floors) {
    if (typeof floors === 'number') this._floors = floors;
    else throw new TypeError('Floors must be a number');
  }

  evacuationWarningMessage() {
    return 'Evacuate slowly the NUMBER_OF_FLOORS floors';
  }
}
