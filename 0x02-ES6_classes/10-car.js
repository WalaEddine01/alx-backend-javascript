export default class Car {
    constructor(brand, motor, color) {
        if (typeof brand === 'string' && typeof motor === 'string' && typeof color === 'string') {
            this._brand = brand;
            this._motor = motor;
            this._color = color;
        }
    }
    // using symbols
    cloneCar() {
        return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
    }
}