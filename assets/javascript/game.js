
// Assign variables to each important paragraph tag
var winsPara = document.getElementById("wins");
var currentWordPara = document.getElementById("current-word");
var guessesRemainingPara = document.getElementById("guesses-remaining");
var lettersGuessedPara = document.getElementById("letters-guessed");

// Declare and initialize additional variables
const maxGuesses = 10;
var isSolved = false;
var guessesRemaining = maxGuesses;
var wins = 0;
var currentWordIndex;
var currentWord = '';
var hiddenWord = '';
var lettersGuessed = [];


// Create array to hold our cat breeds
var catBreeds = [ "Abyssinian",
                  "Balinese",
                  "Bengal",
                  "Birman",
                  "Bobtail", 
                  "Bombay",
                  "Burmese",
                  "Burmilla",
                  "Chartreux",
                  "Cymric",
                  "Himalayan",
                  "Javanese",
                  "Korat",
                  "LaPerm", 
                  "Manx",
                  "Nebelung",
                  "Ocicat",
                  "Persian",
                  "Ragamuffin",
                  "Savannah",
                  "Siamese",
                  "Siberian",
                  "Singapura",
                  "Snowshoe",
                  "Somali",
                  "Sphynx",
                  "Tonkinese" ];

//---------- FUNCTION DEFINITIONS ----------//

// Select random array element (for getting random cat breed)
function getRandomArrayElement(myArray) {
  return myArray[Math.floor(Math.random() * myArray.length)].toLowerCase();
}

// Initialize variables for next round
function initialize() {
  // Reset all values
  guessesRemaining = maxGuesses;
  isSolved = false;

  // Reset DOM display
  guessesRemainingPara.innerHTML = guessesRemaining;
  lettersGuessedPara.innerHTML = '';

  // Choose a new cat
  currentWord = getRandomArrayElement(catBreeds);
  console.log(currentWord); // for testing
  
  // Show unknown word as series of underscores
  hiddenWord = getBlankWord(currentWord)
  currentWordPara.innerHTML = displayBlankWord(hiddenWord);
}

// Show hidden word as underscores
function getBlankWord(word) {
  var blankWord = '';
  for (var i = 0; i < word.length; i++) {
    blankWord += "_";
  }
  return blankWord;
}

  // Create version of the blank word that is more legible
function displayBlankWord(word) {
  var blankWord = '';
  for (var i = 0; i < word.length; i++) {
    blankWord += word[i] + ' ';
  }
  return blankWord.trim();
}

// Update blank word with each correct guess
function updateBlankWord(word, blankWord, letter) { ;
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


function checkProgress() {
  // WRITE ME
  return false;
}

//---------- END FUNCTION DEFINITIONS ----------//

initialize();

document.onkeyup = function (event) {
  var guess = event.key.toLowerCase();

  // Check to see if letter has already been guessed
  if (lettersGuessed.includes(guess)) {
    alert("You've already guessed that letter.");
    return;
  }

  if (currentWord.includes(guess)) {

    hiddenWord = updateBlankWord(currentWord, hiddenWord, guess);
    lettersGuessed.push(guess);
    currentWordPara.innerHTML = displayBlankWord(hiddenWord);
  }

  else {
    lettersGuessed.push(guess);
    lettersGuessedPara.innerHTML += guess + ', ';
    guessesRemainingPara.innerHTML = --guessesRemaining;
  }
  

  isSolved = checkProgress();

  if (isSolved == true) {
    //Increment and display 'wins'
    winsPara.innerHTML = ++wins;
    initialize();
  }
  else if ((isSolved == false) && (guessesRemaining == -1)) {
    initialize();
  }
  else {
    return;
  }
  return;
}
