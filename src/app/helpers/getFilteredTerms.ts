export const getFilteredTerms = (pattern: string, textToSearch: string) => {
  const regexPattern = new RegExp(pattern, "g");
  const matchedTerms = textToSearch.match(regexPattern) ?? [];

  return matchedTerms;
};
