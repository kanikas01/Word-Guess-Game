
// Assign variables to each important paraagraph tag
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
// Choose random cat breed
breed = catBreeds[Math.floor(Math.random() * catBreeds.length)];
console.log(breed); // for testing

// Display initial values for game start
currentWordPara.innerHTML = showBlankWord(breed);
guessesRemainingPara.innerHTML = guessesRemaining;

document.onkeyup = function (event) {
  var guess = event.key.toUpperCase();
  lettersGuessedPara.innerHTML += guess + ' ';
  guessesRemainingPara.innerHTML = --guessesRemaining;

  if (isSolved == true) {
    //Increment and display 'wins'
    winsPara.innerHTML = ++wins;
    reset();
  }
  else if ((isSolved == false) && (guessesRemaining == -1)) {
    reset();
  }
}

function reset() {
  // Reset number of guesses
  guessesRemaining = maxGuesses;
  // Erase last game's info from the DOM
  guessesRemainingPara.innerHTML = guessesRemaining;
  lettersGuessedPara.innerHTML = '';
  // Choose a new cat
  breed = catBreeds[Math.floor(Math.random() * catBreeds.length)];
}

function showBlankWord (word) {
  var hiddenWord = '';
  for (var i = 0; i < word.length; i++) {
    // If breed contains a blank, omit underscore
    if (word[i] == ' ') {
      hiddenWord += '&nbsp;&nbsp';
    } 
    else {
      hiddenWord += "_ ";
    }
  }
  return hiddenWord.trim();
}