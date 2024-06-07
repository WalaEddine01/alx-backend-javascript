const { it } = require("mocha");
const assert = require("assert");
const calculateNumber = require("./1-calcul");

describe("calculateNumber", function(){
    it("should return 4 when passed 1 and 3", function(){
        assert.equal(calculateNumber('SUM', 1, 3), 4)
    });
    it("should return 5 when passed 1 and 3.7", function(){
        assert.equal(calculateNumber('SUM', 1, 3.7), 5)
    });
    it("should return 5 when passed 1.2 and 3.7", function(){
        assert.equal(calculateNumber('SUM', 1.2, 3.7), 5)
    });
    it("should return 5 when passed 1.5 and 3.7", function(){
        assert.equal(calculateNumber('SUM', 1.5, 3.7), 6)
    });
    it('negative return -5', () => {
        assert.equal(calculateNumber('SUM', -1.3, -3.7), -5);
    });
    it('negative return -5', () => {
        assert.equal(calculateNumber('SUBTRACT', -1.3, -3.7), 3);
    });
    it('negative return -5', () => {
        assert.equal(calculateNumber('DIVIDE', -1.3, -3.7), 0.5);
    });
    it('negative return -5', () => {
        assert.equal(calculateNumber('DIVIDE', -1.3, 0), 'Error');
    });
    it('negative return -5', () => {
        assert.equal(calculateNumber('DIVIDE', 1.3, 0), 'Error');
    });
    it('negative return -5', () => {
        assert.equal(calculateNumber('DIVIDE', 1.3, 3.7), 0.5);
    });
    it('negative return -5', () => {
        assert.equal(calculateNumber('DIVIDE', 1.3, 3.3), 0.5);
    });
    it('negative return -5', () => {
        assert.equal(calculateNumber('DIVIDE', 1.3, 3.5), 0.5);
    });
    it('negative return -5', () => {
        assert.equal(calculateNumber('DIVIDE', 1.3, 3.6), 0.5);
    });
    it('negative return -5', () => {
        assert.equal(calculateNumber('NOT', 1.3, 3.7), 'Error');
    });
});
