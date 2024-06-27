const assert = require('assert');
const getPaymentTokenFromAPI = require('./6-payment_token.js');

describe('getPaymentTokenFromAPI', () => {
  it('should return a promise', () => new Promise((done) => {
    getPaymentTokenFromAPI(true)
      .then((res) => {
        assert.equal(res.data, 'Successful response from the API');
        done();
      })
      .catch((error) => done(error));
  }));
});
