const { humanCatDogYears } = require("../src");

describe("humanCatDogYears", () => {
  it("returns a reversed array of the number's digits", () => {
    expect(humanCatDogYears(10)).toEqual([10, 56, 64]);
  });
});
