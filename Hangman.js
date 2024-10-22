function start() {
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
    return listOfWords[randomWord].toLowerCase();
  }

  const guessedLetters = [];
  let wrongGuesses = 0;
  const maxMistakes = 6;
  let guessedStatus = [];
  let wordToGuess = pickRandomWord();

  function restart() {
    let newGame = prompt("New game? (Y/N)").toLowerCase();
    if (newGame === "y") {
      start();
    } else {
      alert("See you next time!");
    }
  }

  console.log("word to guess: " + wordToGuess);

  function setGuessedStatus() {
    guessedStatus = Array(wordToGuess.length).fill("_");
  }

  function displayStatus() {
    console.log(guessedStatus.join(""));
    console.log("Wrong guesses: " + wrongGuesses);
  }

  setGuessedStatus();
  console.log("word to guess: " + wordToGuess);

  while (wrongGuesses < maxMistakes && guessedStatus.includes("_")) {
    displayStatus();
    let guess = prompt("Guess a letter:").toLowerCase();
    if (!/^[a-z]$/.test(guess) || guessedLetters.includes(guess)) {
      alert("Invalid guess!");
    } else if (wordToGuess.includes(guess)) {
      for (let i = 0; i < wordToGuess.length; i++) {
        if (wordToGuess[i] === guess) {
          guessedStatus[i] = guess;
        }
        guessedLetters.push(guess);
      }
    } else {
      alert("Wrong guess!");
      guessedLetters.push(guess);
      wrongGuesses++;
    }
  }

  if (wrongGuesses === maxMistakes) {
    alert("You lost, the word was: " + wordToGuess);
    restart();
  } else if (!guessedStatus.includes("_")) {
    alert("You guessed the word: " + wordToGuess);
    restart();
  }
}

start();

function addWord(newWord) {
  listOfWords.push(newWord);
}
