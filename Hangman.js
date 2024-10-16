const listOfWords = [
  "Javascript",
  "Codewars",
  "Frontend",
  "Laptop",
  "Syntax",
  "Hangman",
];

function pickRandomWord() {
  let randomWord = Math.floor(Math.random() * listOfWords.length);
  return randomWord;
}

const guessedLetters = [];
let wrongGuesses = 0;
const maxMistakes = 6;
let guessedStatus = [];
let wordToGuess = listOfWords[pickRandomWord()];
let indices = [];

console.log("word to guess: " + wordToGuess);

function setGuessedStatus() {
  for (i = 0; i < wordToGuess.length; i++) {
    guessedStatus.push("_");
  }
}

setGuessedStatus();

function displayStatus() {
  console.log(guessedStatus.join(""));
  console.log("Wrong guesses: " + wrongGuesses);
}

console.log(guessedStatus);

while (wrongGuesses < 6 || guessedLetters.join("") == wordToGuess) {
  displayStatus();
  let guess = prompt("Guess a letter:");
  if (!/^[a-z]$/.test(guess) || guessedLetters.includes(guess)) {
    alert("Invalid guess!");
  } else if (wordToGuess.includes(guess)) {
    for (let i = 0; i < wordToGuess.length; i++) {
      if (wordToGuess[i] === guess) {
        guessedStatus[i] = guess;
      }
      console.log(guessedStatus);
    }
  } else {
    alert("Wrong guess!");
    wrongGuesses++;
  }
}

if (wrongGuesses == maxMistakes) {
  alert("You lost, the word was: " + wordToGuess);
} else if (!guessedStatus.includes("_")) {
  alert("You guessed the word: " + wordToGuess);
}

console.log(wordToGuess.split(""));
