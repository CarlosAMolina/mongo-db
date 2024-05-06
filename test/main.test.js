const jest_ = require("@jest/globals");

// const main = require("../src/main.js");

jest_.describe("Check nothing", function () {
  jest_.it("Check expected result", function () {
    //jest_.expect(main.exportedForTesting.sum_1(1)).toBe(2);
    jest_.expect(2).toBe(2);
  });
});
