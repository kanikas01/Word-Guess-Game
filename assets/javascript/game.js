
// Assign variables to each important paragraph tag
var winsPara = document.getElementById("wins");
var currentWordPara = document.getElementById("current-word");
var guessesRemainingPara = document.getElementById("guesses-remaining");
var lettersGuessedPara = document.getElementById("letters-guessed");

// Additional variables
const maxGuesses = 10;
var isSolved = false;
var guessesRemaining = maxGuesses;
var wins = 0;

// Array to hold our cat breeds
var catBreeds = ["Abyssinian", "American Bobtail", "American Curl", "American Shorthair", "American Wirehair", "Balinese", "Bengal Cats", "Birman", "Bombay", "British Shorthair", "Burmese", "Burmilla", "Chartreux", "Chinese Li Hua", "Colorpoint Shorthair", "Cornish Rex", "Cymric", "Devon Rex", "Egyptian Mau", "European Burmese", "Exotic", "Havana Brown", "Himalayan", "Japanese Bobtail", "Javanese", "Korat", "LaPerm", "Maine Coon", "Manx", "Nebelung", "Norwegian Forest", "Ocicat", "Oriental", "Persian", "Pixie-Bob", "Ragamuffin", "Ragdoll Cats", "Russian Blue", "Savannah", "Scottish Fold", "Selkirk Rex", "Siamese Cat", "Siberian", "Singapura", "Snowshoe", "Somali", "Sphynx", "Tonkinese", "Turkish Angora", "Turkish Van"];

//---------- FUNCTION DEFINITIONS ----------//

// Select random array element (for getting random cat breed)
function getRandomArrayElement(myArray) {
  return myArray[Math.floor(Math.random() * myArray.length)];
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
  breed = getRandomArrayElement(catBreeds);
  console.log(breed); // for testing
  
  // Show unknown word as series of underscores
  currentWordPara.innerHTML = showBlankWord(breed);
}

// Show hidden word as underscores
function showBlankWord(word) {
  var hiddenWord = '';
  for (var i = 0; i < word.length; i++) {
    // Omit underscore for blank spaces
    if (word[i] == ' ') {
      hiddenWord += '&nbsp;&nbsp';
    }
    else {
      hiddenWord += "_ ";
    }
  }
  return hiddenWord.trim();
}

function testGuess(guess) {
  // WRITE ME
  return;
}

function checkProgress() {
  // WRITE ME
  return false;
}

//---------- END FUNCTION DEFINITIONS ----------//

initialize();

document.onkeyup = function (event) {
  var guess = event.key.toUpperCase();
  lettersGuessedPara.innerHTML += guess + ' ';
  guessesRemainingPara.innerHTML = --guessesRemaining;
  var result = testGuess();
  isSolved = checkProgress();
  console.log(result);

  if (isSolved == true) {
    //Increment and display 'wins'
    winsPara.innerHTML = ++wins;
    initialize();
  }
  else if ((isSolved == false) && (guessesRemaining == -1)) {
    initialize();
  }
}
