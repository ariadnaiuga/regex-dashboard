import { RegExpInterface } from "../types";

export const DATA: RegExpInterface[] = [
  {
    description: "Get all 4-letter words",
    pattern: "/\bw{4}\b/g",
    approved: true,
  },
  {
    description: "Get all 6-letter words",
    pattern: "/\bw{6}\b/g",
    approved: false,
  },
];
