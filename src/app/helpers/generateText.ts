import { LoremIpsum } from "lorem-ipsum";

export const generateText = (): string => {
  const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 30,
      min: 20,
    },
    wordsPerSentence: {
      max: 30,
      min: 20,
    },
  });

  return lorem.generateParagraphs(3);
};
