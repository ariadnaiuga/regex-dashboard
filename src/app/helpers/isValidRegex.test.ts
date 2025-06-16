import { isValidRegex } from "./isValidRegex";

describe("isValidRegex", () => {
  it("should return true if the regex pattern is correct", () => {
    expect(isValidRegex("/\bw{4}\b/g")).toBe(true);
    expect(isValidRegex("")).toBe(true);
  });

  it("should return false if the regex pattern is not correct", () => {
    expect(isValidRegex("/\bw{4}\b/g[")).toBe(false);
  });
});
