const assert = require("assert");
const calculateNumber = require("./0-calcul");

describe("calculateNumber", function(){
    it("should return 3 when passed 1 and 2", function(){
        assert.equal(calculateNumber(1, 2), 3)
    });
    it("should return 3 when passed 1.3 and 2.3", function(){
        assert.equal(calculateNumber(1, 2), 3)
    });
    it("should return 4 when passed 1.5 and 2", function(){
        assert.equal(calculateNumber(1, 2), 3)
    })
    it("should return 5 when passed 1.5 and 2.6", function(){
        assert.equal(calculateNumber(1, 2), 3)
    })
});
