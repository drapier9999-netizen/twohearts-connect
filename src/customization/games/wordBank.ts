/** Shared word list used by Word Scramble, Hangman, Guess the Word and Word Search. */
export type WordEntry = { word: string; hint: string };

export const wordBank: WordEntry[] = [
  { word: "SUNSET", hint: "The sky's goodnight" },
  { word: "PROMISE", hint: "Something you keep" },
  { word: "LAUGHTER", hint: "The best background noise" },
  { word: "JOURNEY", hint: "Not the destination" },
  { word: "FOREVER", hint: "A very long time" },
  { word: "COMFORT", hint: "Where you feel safe" },
  { word: "MEMORY", hint: "Kept in a photo" },
  { word: "HOMEMADE", hint: "Better than takeout" },
  { word: "TOGETHER", hint: "Not apart" },
  { word: "WHISPER", hint: "Said quietly" },
  { word: "ADVENTURE", hint: "Pack a bag" },
  { word: "SERENADE", hint: "A song for someone" },
  { word: "BLOSSOM", hint: "What spring does" },
  { word: "CHERISH", hint: "To hold dear" },
  { word: "MIDNIGHT", hint: "Day's turning point" },
];
