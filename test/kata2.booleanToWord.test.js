const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  it("returns Fizz when passed a multiple of 3", () => {
    expect(booleanToWord(true)).toBe("Yes");
    expect(booleanToWord(false)).toBe("No");
  });
});
