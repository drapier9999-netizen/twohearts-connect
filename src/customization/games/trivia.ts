export type TriviaQuestion = {
  question: string;
  choices: string[];
  /** index into choices */
  answer: number;
};

export const trivia: TriviaQuestion[] = [
  {
    question: "Which flower traditionally symbolises devotion?",
    choices: ["Tulip", "Red rose", "Daisy", "Sunflower"],
    answer: 1,
  },
  {
    question: "How many days are in a leap year?",
    choices: ["364", "365", "366", "367"],
    answer: 2,
  },
  {
    question: "Which planet is known as the Evening Star?",
    choices: ["Mars", "Venus", "Mercury", "Jupiter"],
    answer: 1,
  },
  {
    question: "What is the traditional gift for a first anniversary?",
    choices: ["Paper", "Silver", "Wood", "Gold"],
    answer: 0,
  },
  {
    question: "Which city is called the City of Love?",
    choices: ["Rome", "Venice", "Paris", "Vienna"],
    answer: 2,
  },
  {
    question: "What colour do you get mixing red and white?",
    choices: ["Orange", "Pink", "Purple", "Peach"],
    answer: 1,
  },
  {
    question: "How many strings does a standard guitar have?",
    choices: ["4", "5", "6", "7"],
    answer: 2,
  },
  {
    question: "Which sense is most closely linked to memory?",
    choices: ["Sight", "Smell", "Touch", "Hearing"],
    answer: 1,
  },
];
