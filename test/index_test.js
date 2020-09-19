const assert = require("assert");
const Calculate = require("../index");

describe("Calculate", () => {
    describe(".factorial", () => {
      it("will test if the output of 5! equal to 120", () => {
        //setup
        const expected = 120;
        const inputNum = 5;
        //exercise
        const result = Calculate.factorial(inputNum);    
        //verification
        assert.equal(result, expected);

      })
      
      it("accept different input and output expected result", () => {
        //setup
        const expected = 24;
        const inputNum = 4;
        //exercise
        const result = Calculate.factorial(inputNum);
        //verification
        assert.equal(result, expected)

      })
      // edge case
      it("returns 1 when you pass in 0", () => {
          //setup
          const expected = 1;
          const inputNum = 0;
          //exercise
          const result = Calculate.factorial(inputNum);
          //verify
          assert.equal(result, expected);
      })
    })
})
