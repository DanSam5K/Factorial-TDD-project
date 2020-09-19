const assert = require("assert");
const Calculate = require("../index");

describe("Calculate", () => {
    describe(".factorial", () => {
      it("will test if the output of 5! equal to 120", () => {

        assert.equal(Calculate.factorial(5), 120);

      })  
    })
})
