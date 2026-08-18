import { whoKnowsWhoBetter } from "./whoKnowsWhoBetter";
import { wouldYouRather } from "./wouldYouRather";
import { twentyQuestions } from "./twentyQuestions";
import { thisOrThat } from "./thisOrThat";
import { wordBank } from "./wordBank";
import { trivia } from "./trivia";
import { riddles } from "./riddles";
import { emojiGuess } from "./emojiGuess";

export type GameId =
  | "who-knows-who-better"
  | "would-you-rather"
  | "twenty-questions"
  | "this-or-that"
  | "word-scramble"
  | "guess-the-word"
  | "hangman"
  | "riddle-me-this"
  | "two-truths-and-a-lie"
  | "emoji-guess"
  | "trivia-challenge"
  | "word-search"
  | "memory-match"
  | "tic-tac-toe"
  | "connect-four"
  | "2048";

export type GameCategory = "couple" | "word" | "brain" | "classic";

export type GameMeta = {
  id: GameId;
  title: string;
  blurb: string;
  category: GameCategory;
  players: "1" | "2" | "1-2";
  emoji: string;
  /** false = playable UI not implemented yet */
  ready: boolean;
};

export const gameCatalog: GameMeta[] = [
  {
    id: "who-knows-who-better",
    title: "Who Knows Who Better",
    blurb: "Answer about each other and compare.",
    category: "couple",
    players: "2",
    emoji: "💞",
    ready: true,
  },
  {
    id: "would-you-rather",
    title: "Would You Rather",
    blurb: "Two options. No middle ground.",
    category: "couple",
    players: "1-2",
    emoji: "🤔",
    ready: true,
  },
  {
    id: "twenty-questions",
    title: "20 Questions",
    blurb: "Deep questions, one at a time.",
    category: "couple",
    players: "2",
    emoji: "💬",
    ready: true,
  },
  {
    id: "this-or-that",
    title: "This or That",
    blurb: "Quick-fire preferences.",
    category: "couple",
    players: "1-2",
    emoji: "⚖️",
    ready: true,
  },
  {
    id: "two-truths-and-a-lie",
    title: "2 Truths and a Lie",
    blurb: "Spot the lie.",
    category: "couple",
    players: "2",
    emoji: "🎭",
    ready: false,
  },
  {
    id: "word-scramble",
    title: "Word Scramble",
    blurb: "Unscramble the love-letters.",
    category: "word",
    players: "1",
    emoji: "🔤",
    ready: true,
  },
  {
    id: "guess-the-word",
    title: "Guess the Word",
    blurb: "Clues in, word out.",
    category: "word",
    players: "1",
    emoji: "🔎",
    ready: false,
  },
  {
    id: "hangman",
    title: "Hangman",
    blurb: "Letter by letter.",
    category: "word",
    players: "1",
    emoji: "🎯",
    ready: false,
  },
  {
    id: "word-search",
    title: "Word Search",
    blurb: "Find the hidden words.",
    category: "word",
    players: "1",
    emoji: "🧩",
    ready: false,
  },
  {
    id: "riddle-me-this",
    title: "Riddle Me This",
    blurb: "Think sideways.",
    category: "brain",
    players: "1-2",
    emoji: "🧠",
    ready: true,
  },
  {
    id: "emoji-guess",
    title: "Emoji Guess",
    blurb: "Decode the emoji story.",
    category: "brain",
    players: "1-2",
    emoji: "😍",
    ready: true,
  },
  {
    id: "trivia-challenge",
    title: "Trivia Challenge",
    blurb: "A little of everything.",
    category: "brain",
    players: "1-2",
    emoji: "❓",
    ready: true,
  },
  {
    id: "memory-match",
    title: "Memory Match",
    blurb: "Pair the cards.",
    category: "classic",
    players: "1",
    emoji: "🃏",
    ready: false,
  },
  {
    id: "tic-tac-toe",
    title: "Tic-Tac-Toe",
    blurb: "Three in a row.",
    category: "classic",
    players: "2",
    emoji: "⭕",
    ready: false,
  },
  {
    id: "connect-four",
    title: "Connect Four",
    blurb: "Drop and connect.",
    category: "classic",
    players: "2",
    emoji: "🔵",
    ready: false,
  },
  {
    id: "2048",
    title: "2048",
    blurb: "Slide and merge.",
    category: "classic",
    players: "1",
    emoji: "🔢",
    ready: false,
  },
];

export const gameContent = {
  whoKnowsWhoBetter,
  wouldYouRather,
  twentyQuestions,
  thisOrThat,
  wordBank,
  trivia,
  riddles,
  emojiGuess,
};

export const categoryLabels: Record<GameCategory, string> = {
  couple: "For the two of you",
  word: "Word games",
  brain: "Brain teasers",
  classic: "Classics",
};
