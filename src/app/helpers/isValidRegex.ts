/* eslint-disable @typescript-eslint/no-unused-vars */
export const isValidRegex = (input: string): boolean => {
  try {
    new RegExp(input);
    return true;
  } catch (err) {
    return false;
  }
};
