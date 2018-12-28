// This version of the game file uses an object-oriented approach

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
}

// Initialize variables for next round
function initialize(obj) {
  // Reset all values
  mainContainer.style.display = 'block';
  resultDiv.style.display = 'none';
  h1.innerHTML = "Guess the cat breed";
  gamePrompt.innerHTML = "Type any letter to get started!";
  obj.guessesRemaining = obj.maxWrongGuesses;
  obj.isSolved = false;
  obj.lettersGuessed = [];

  // Reset DOM display
  guessesRemainingPara.innerHTML = obj.guessesRemaining;
  lettersGuessedPara.innerHTML = '';
  resultPara.innerHTML = '';

  // Choose a new cat
  obj.currentWord = getRandomArrayElement(catBreeds, obj.currentWord);
  console.log(obj.currentWord); // for testing

  // Show unknown word as series of underscores
  obj.hiddenWord = obj.getBlankWord();
  currentWordPara.innerHTML = obj.displayBlankWord();
}

//---------- END FUNCTION DEFINITIONS ----------//


//---------- GAME OBJECT DEFINITION ----------//
var game = {
  maxWrongGuesses: 7,
  guessesRemaining: 0,
  isSolved: false,
  wins: 0,
  currentWord: '',
  hiddenWord: '',
  lettersGuessed: [],
  letterChoices: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  happyMeow: new Audio('assets/sounds/meow.mp3'),
  angryMeow: new Audio('assets/sounds/angry-meow.mp3'),

  checkProgress: function () {
    return !(this.hiddenWord.includes('_'));
  },
  
  // Show hidden word as underscores (except space and hyphen chars)
  getBlankWord: function () {
    var blankWord = '';
    for (var i = 0; i < this.currentWord.length; i++) {
      if (this.currentWord[i] === ' ') {
        blankWord += ' ';
      }
      else if (this.currentWord[i] === '-') {
        blankWord += '-';
      }
      else {
        blankWord += "_";
      }
    }
    return blankWord;
  },

  // Create version of the blank word that is more legible
  displayBlankWord: function () {
    var blankWord = '';
    for (var i = 0; i < this.hiddenWord.length; i++) {
      if (this.hiddenWord[i] == ' ') {
        blankWord += '&nbsp;&nbsp;&nbsp;'
      }
      else {
        blankWord += this.hiddenWord[i] + ' ';
      }
    }
    return blankWord.trim();
  },

  // Update blank word with each correct guess
  // 'letter' - the current letter being guessed
  updateBlankWord: function (letter) {
    var newBlankWord = '';
    for (var i = 0; i < this.currentWord.length; i++) {
      if (this.currentWord[i] == letter) {
        newBlankWord += letter;
      }
      else {
        newBlankWord += this.hiddenWord[i];
      }
    }
    return newBlankWord;
  },

  // Displays results depending on win or loss
  // 'outcome' - true for win, false for lose
  displayResults: function (outcome) {
    if (outcome) {
      this.happyMeow.play();
      h1.innerHTML = "YOU WIN";
      gamePrompt.innerHTML = 'Congratulations!';
      h2Result.innerHTML = `You guessed ${this.currentWord}!`;
    }
    else {
      this.angryMeow.play();
      h1.innerHTML = "YOU LOSE";
      gamePrompt.innerHTML = 'Better luck next time!';
      h2Result.innerHTML = `The correct answer was:<br>${this.currentWord}`;
    }
    // Start countdown display to next round
    countdown();
  }
};

//---------- END GAME OBJECT DEFINITION ----------//

//---------- RUN GAME ----------//

initialize(game);

document.onkeyup = function (event) {
  var guess = event.key.toUpperCase();

  // Prevent keystrokes from registering if game is over
  if ((game.isSolved) || (game.guessesRemaining == 0)) {
    return;
  }

  // Ignore input if not a letter
  if ( !(game.letterChoices.includes(guess)) ) {
    return;
  }

  // Check to see if letter has already been guessed
  if (game.lettersGuessed.includes(guess)) {
    return;
  }

  // Check if guessed letter is in the word
  // If so, fill in blanks. If not, add letter to 
  // guessed letters and decrease remaining guesses
  if (game.currentWord.includes(guess)) {
    game.hiddenWord = game.updateBlankWord(guess);
    game.lettersGuessed.push(guess);
    currentWordPara.innerHTML = game.displayBlankWord();
  }
  else {
    game.lettersGuessed.push(guess);
    lettersGuessedPara.innerHTML += guess + ' ';
    guessesRemainingPara.innerHTML = game.isSolved ? game.guessesRemaining : --game.guessesRemaining;
  }

  // Check to see if the puzzle has been solved
  game.isSolved = game.checkProgress();

  if (game.isSolved) {
    // Game won state - increment'wins', display message and restart
    game.displayResults(true);
    winsPara.innerHTML = ++game.wins;
    setTimeout(initialize, 4000, game);
  }
  else if ((game.isSolved == false) && (game.guessesRemaining <= 0)) {
    // Game lost state - display message and restart
    game.displayResults(false);
    setTimeout(initialize, 4000, game);
  }
  else {
    return;
  }
  return;
}
