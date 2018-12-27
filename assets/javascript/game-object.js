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
    for (var i = 0; i < this.currentWord.length; i++) {
      if (this.currentWord[i] === ' ') {
        blankWord += '&nbsp;&nbsp;&nbsp;'
      }
      else {
        blankWord += this.currentWord[i] + ' ';
      }
    }
    return blankWord.trim();
  },

  // Update blank word with each correct guess
  // 'letter' - the current letter being guessed
  updateBlankWord: function (letter) {
    var newBlankWord = '';
    for (var i = 0; i < this.currentWord.length; i++) {
      if (this.currentWord[i] === letter) {
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
  },

  // NEXT ADD INITIALIZE FUNCTION

};

//---------- END GAME OBJECT DEFINITION ----------//

// var person = {
//   firstName: "John",
//   lastName: "Doe",
//   id: 5566,
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   }
// };

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

//---------- END FUNCTION DEFINITIONS ----------//