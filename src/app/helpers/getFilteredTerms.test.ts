import { getFilteredTerms } from "./getFilteredTerms";

describe("getFilteredTerms", () => {
  it("should return an array with the matching terms", () => {
    expect(
      getFilteredTerms("\\b\\w{4}\\b", "Phrase with 4 character words.")
    ).toEqual(["with"]);
  });

  it("should return an empty array if no terms match the pattern", () => {
    expect(
      getFilteredTerms("/\bw{4}\b/g", "Phrase without 4 character words.")
    ).toEqual([]);
  });
});
