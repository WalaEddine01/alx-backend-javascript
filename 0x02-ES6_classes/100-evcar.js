import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    if (typeof range === 'string') {
      super(brand, motor, color);
      this._range = range;
    }
  }

  cloneCar() {
    return new Car();
  }
}
