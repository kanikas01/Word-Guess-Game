
// Assign variables to each important html tag
var mainContainer = document.getElementById("main-container");
var resultDiv = document.getElementById("result");
var h2Result = document.getElementById("h2-result");
var resultPara = document.getElementById("p-result");
var winsPara = document.getElementById("wins");
var currentWordPara = document.getElementById("current-word");
var guessesRemainingPara = document.getElementById("guesses-remaining");
var lettersGuessedPara = document.getElementById("letters-guessed");
var h1 = document.getElementById("h1");
var gamePrompt = document.getElementById("game-prompt");

// Declare and initialize additional variables
const maxWrongGuesses = 7;  // Max number of wrong guesses allowed before losing game
var isSolved = false;       // Has the puzzle been solved
var guessesRemaining = 0;   // Number of wrong guesses remaining before losing game
var wins = 0;               // Number of wins in session
var currentWord = '';       // The word being guessed
var hiddenWord = '';        // currentWord with unguessed letters replaced by underscores
var lettersGuessed = [];    // Holds letters guessed during gameplay
var letterChoices = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';   // All possible legit key inputs
var happyMeow = new Audio('assets/sounds/meow.mp3');        // Happy cat sound
var angryMeow = new Audio('assets/sounds/angry-meow.mp3');  // Angry cat sound

// Create array to hold our cat breeds
var catBreeds = ["Abyssinian",
                "American Bobtail",
                "American Curl",
                "American Shorthair",
                "American Wirehair",
                "Balinese",
                "Bengal",
                "Birman",
                "Bombay",
                "British Shorthair",
                "Burmese",
                "Burmilla",
                "Chartreux",
                "Chinese Li Hua",
                "Colorpoint Shorthair",
                "Cornish Rex",
                "Cymric",
                "Devon Rex",
                "Egyptian Mau",
                "European Burmese",
                "Havana Brown",
                "Himalayan",
                "Japanese Bobtail",
                "Javanese",
                "Korat",
                "LaPerm",
                "Maine Coon",
                "Manx",
                "Nebelung",
                "Norwegian Forest",
                "Nyan",
                "Ocicat",
                "Persian",
                "Ragamuffin",
                "Ragdoll",
                "Russian Blue",
                "Savannah",
                "Scottish Fold",
                "Selkirk Rex",
                "Siamese",
                "Siberian",
                "Singapura",
                "Snowshoe",
                "Somali",
                "Sphynx",
                "Tonkinese",
                "Turkish Angora",
                "Turkish Van"];

//---------- FUNCTION DEFINITIONS ----------//

// Select random array element (for getting random cat breed)
// Uses recursion to prevent returning the same value twice in a row
// Takes an array and currentWord as arguments
function getRandomArrayElement(myArray, currentWord) {
  var newWord = myArray[Math.floor(Math.random() * myArray.length)].toUpperCase();
  if (newWord == currentWord) {
    return getRandomArrayElement(myArray, currentWord);
  }
  else {
    return newWord;
  }
}

// Initialize variables for next round
function initialize() {
  // Reset all values
  mainContainer.style.display = 'block';
  resultDiv.style.display = 'none';
  h1.innerHTML = "Guess the cat breed";
  gamePrompt.innerHTML = "Type any letter to get started!";
  guessesRemaining = maxWrongGuesses;
  isSolved = false;
  lettersGuessed = [];

  // Reset DOM display
  guessesRemainingPara.innerHTML = guessesRemaining;
  lettersGuessedPara.innerHTML = '';
  resultPara.innerHTML = '';

  // Choose a new cat
  currentWord = getRandomArrayElement(catBreeds, currentWord);
  console.log(currentWord); // for testing

  // Show unknown word as series of underscores
  hiddenWord = getBlankWord(currentWord)
  currentWordPara.innerHTML = displayBlankWord(hiddenWord);
}

// Show hidden word as underscores (except space and hyphen chars)
// 'word' - the word currently being guessed
function getBlankWord(word) {
  var blankWord = '';
  for (var i = 0; i < word.length; i++) {
    if (word[i] === ' ') {
      blankWord += ' ';
    }
    else if (word[i] === '-') {
      blankWord += '-';
    }
    else {
      blankWord += "_";
    }
  }
  return blankWord;
}

// Create version of the blank word that is more legible
// 'word' - the word currently being guessed
function displayBlankWord(word) {
  var blankWord = '';
  for (var i = 0; i < word.length; i++) {
    if (word[i] === ' ') {
      blankWord += '&nbsp;&nbsp;&nbsp;'
    }
    else {
      blankWord += word[i] + ' ';
    }
  }
  return blankWord.trim();
}

// Update blank word with each correct guess
// 'word' - the word currently being guessed
// 'blankWord' - the hidden form of word, likely 'hiddenWord'
// 'letter' - the current letter guess
function updateBlankWord(word, blankWord, letter) {
  ;
  var newBlankWord = '';
  for (var i = 0; i < word.length; i++) {
    if (word[i] === letter) {
      newBlankWord += letter;
    }
    else {
      newBlankWord += blankWord[i];
    }
  }
  return newBlankWord;
}

// Check whether the word has been guessed
// 'word' - the word currently being guessed
function checkProgress(word) {
  return !(word.includes('_'));
}

// Counts down to the start of the next round 
function countdown() {

  function displayCountdown(i) {
    resultPara.innerHTML = `Starting next round in:<br>${i}`;
  }

  // Hide main container and show results div
  mainContainer.style.display = 'none';
  resultDiv.style.display = 'block';
  
  // Simulate countdown
  setTimeout(displayCountdown, 1000, 3);
  setTimeout(displayCountdown, 2000, 2);
  setTimeout(displayCountdown, 3000, 1);
  // Reset game for next round
  setTimeout(initialize, 4000);
}

// Displays results depending on win or loss
// 'outcome' - true for win, false for lose
// 'word' - the word currently being guessed
function displayResults (outcome, word) {
  if (outcome) {
    happyMeow.play();
    h1.innerHTML = "YOU WIN";
    gamePrompt.innerHTML = 'Congratulations!';
    h2Result.innerHTML = `You guessed ${word}!`;
  }
  else {
    angryMeow.play();
    h1.innerHTML = "YOU LOSE";
    gamePrompt.innerHTML = 'Better luck next time!';
    h2Result.innerHTML = `The correct answer was:<br>${word}`;
  }
  // Start countdown display to next round
  countdown();
}

//---------- END FUNCTION DEFINITIONS ----------//

initialize();

document.onkeyup = function (event) {
  var guess = event.key.toUpperCase();

  // Prevent keystrokes from registering if game is over
  if ((isSolved) || (guessesRemaining == 0)) {
    return;
  }

  // Ignore input if not a letter
  if (!(letterChoices.includes(guess))) {
    return;
  }

  // Check to see if letter has already been guessed
  if (lettersGuessed.includes(guess)) {
    return;
  }

  // Check if guessed letter is in the word
  // If so, fill in blanks. If not, add letter to 
  // guessed letters and decrease remaining guesses
  if (currentWord.includes(guess)) {
    hiddenWord = updateBlankWord(currentWord, hiddenWord, guess);
    lettersGuessed.push(guess);
    currentWordPara.innerHTML = displayBlankWord(hiddenWord);
  }
  else {
    lettersGuessed.push(guess);
    lettersGuessedPara.innerHTML += guess + ' ';
    guessesRemainingPara.innerHTML = isSolved ? guessesRemaining : --guessesRemaining;
  }

  // Check to see if the puzzle has been solved
  isSolved = checkProgress(hiddenWord);

  if (isSolved) {
    // Game won state - increment'wins', display message and restart
    displayResults(true, currentWord);
    winsPara.innerHTML = ++wins;
  }
  else if ((isSolved == false) && (guessesRemaining <= 0)) {
    // Game lost state - display message and restart
    displayResults(false, currentWord);
  }
  else {
    return;
  }
  return;
}
