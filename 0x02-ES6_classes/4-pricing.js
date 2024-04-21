import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof (amount) === 'number') this._amount = amount;
    else throw new TypeError('Amount must be a number');
    if (currency instanceof Currency) this._currency = currency;
    else throw new TypeError('Currency must be a Currency');
  }

  set amount(amount) {
    if (typeof (amount) === 'number') this._amount = amount;
    else throw new TypeError('Amount must be a number');
  }

  set currency(currency) {
    if (currency instanceof Currency) this._currency = currency;
    else throw new TypeError('Currency must be a Currency');
  }

  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof (amount) === 'number' && typeof (conversionRate) === 'number') {
      return amount * conversionRate;
    }
    return 0;
  }
}
