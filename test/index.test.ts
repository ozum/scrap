import { add } from "../src/index";

describe("index", () => {
  it("should return same number", () => {
    expect(add(3)).toBe(3);
  });
});
