import { RegExpInterface } from "../types";

export const DATA: RegExpInterface[] = [
  {
    description: "Get all 4-letter words",
    pattern: "\\b\\w{4}\\b",
  },
  {
    description: "Get all 6-letter words",
    pattern: "\\b\\w{6}\\b",
  },
];
