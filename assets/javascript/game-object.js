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
var catBreeds = [ abyssinian = { name: 'Abyssinian', url: 'https://en.wikipedia.org/wiki/Abyssinian_cat' },
                  americanBobtail = { name: 'American Bobtail', url: 'https://en.wikipedia.org/wiki/American_Bobtail' },
                  americanCurl = { name: 'American Curl', url: 'https://en.wikipedia.org/wiki/American_Curl' },
                  americanShorthair = { name: 'American Shorthair', url: 'https://en.wikipedia.org/wiki/American_Shorthair' },
                  americanWirehair = { name: 'American Wirehair', url: 'https://en.wikipedia.org/wiki/American_Wirehair' },
                  balinese = { name: 'Balinese', url: 'https://en.wikipedia.org/wiki/Balinese_cat' },
                  bengal = { name: 'Bengal', url: 'https://en.wikipedia.org/wiki/Bengal_cat' },
                  birman = { name: 'Birman', url: 'https://en.wikipedia.org/wiki/Birman' },
                  bombay = { name: 'Bombay', url: 'https://en.wikipedia.org/wiki/Bombay_cat' },
                  britishShorthair = { name: 'British Shorthair', url: 'https://en.wikipedia.org/wiki/British_Shorthair' },
                  burmese = { name: 'Burmese', url: 'https://en.wikipedia.org/wiki/Burmese_cat' },
                  burmilla = { name: 'Burmilla', url: 'https://en.wikipedia.org/wiki/Burmilla' },
                  chartreux = { name: 'Chartreux', url: 'https://en.wikipedia.org/wiki/Chartreux' },
                  chineseLiHua = { name: 'Chinese Li Hua', url: 'https://en.wikipedia.org/wiki/Dragon_Li' },
                  colorpointShorthair = { name: 'Colorpoint Shorthair', url: 'https://en.wikipedia.org/wiki/Colorpoint_Shorthair' },
                  cornishRex = { name: 'Cornish Rex', url: 'https://en.wikipedia.org/wiki/Cornish_Rex' },
                  cymric = { name: 'Cymric', url: 'https://en.wikipedia.org/wiki/Cymric_cat' },
                  devonRex = { name: 'Devon Rex', url: 'https://en.wikipedia.org/wiki/Devon_Rex' },
                  egyptianMau = { name: 'Egyptian Mau', url: 'https://en.wikipedia.org/wiki/Egyptian_Mau' },
                  europeanBurmese = { name: 'European Burmese', url: 'https://en.wikipedia.org/wiki/Burmese_cat' },
                  havanaBrown = { name: 'Havana Brown', url: 'https://en.wikipedia.org/wiki/Havana_Brown' },
                  himalayan = { name: 'Himalayan', url: 'https://en.wikipedia.org/wiki/Himalayan_cat' },
                  japaneseBobtail = { name: 'Japanese Bobtail', url: 'https://en.wikipedia.org/wiki/Japanese_Bobtail' },
                  javanese = { name: 'Javanese', url: 'https://en.wikipedia.org/wiki/Javanese_cat' },
                  korat = { name: 'Korat', url: 'https://en.wikipedia.org/wiki/Korat' },
                  laperm = { name: 'LaPerm', url: 'https://en.wikipedia.org/wiki/LaPerm' },
                  maineCoon = { name: 'Maine Coon', url: 'https://en.wikipedia.org/wiki/Maine_Coon' },
                  manx = { name: 'Manx', url: 'https://en.wikipedia.org/wiki/Manx_cat' },
                  nebelung = { name: 'Nebelung', url: 'https://en.wikipedia.org/wiki/Nebelung' },
                  norwegianForest = { name: 'Norwegian Forest', url: 'https://en.wikipedia.org/wiki/Norwegian_Forest_cat' },
                  nyan = { name: 'Nyan Cat', url: 'https://www.youtube.com/watch?v=QH2-TGUlwu4' },
                  ocicat = { name: 'Ocicat', url: 'https://en.wikipedia.org/wiki/Ocicat' },
                  persian = { name: 'Persian', url: 'https://en.wikipedia.org/wiki/Persian_cat' },
                  ragamuffin = { name: 'Ragamuffin', url: 'https://en.wikipedia.org/wiki/Ragamuffin_cat' },
                  ragdoll = { name: 'Ragdoll', url: 'https://en.wikipedia.org/wiki/Ragdoll' },
                  russianBlue = { name: 'Russian Blue', url: 'https://en.wikipedia.org/wiki/Russian_Blue' },
                  savannah = { name: 'Savannah', url: 'https://en.wikipedia.org/wiki/Savannah_cat' },
                  scottishFold = { name: 'Scottish Fold', url: 'https://en.wikipedia.org/wiki/Scottish_Fold' },
                  selkirkRex = { name: 'Selkirk Rex', url: 'https://en.wikipedia.org/wiki/Selkirk_Rex' },
                  siamese = { name: 'Siamese', url: 'https://en.wikipedia.org/wiki/Siamese_cat' },
                  siberian = { name: 'Siberian', url: 'https://en.wikipedia.org/wiki/Siberian_cat' },
                  singapura = { name: 'Singapura', url: 'https://en.wikipedia.org/wiki/Singapura_cat' },
                  snowshoe = { name: 'Snowshoe', url: 'https://en.wikipedia.org/wiki/Snowshoe_cat' },
                  somali = { name: 'Somali', url: 'https://en.wikipedia.org/wiki/Somali_cat' },
                  sphynx = { name: 'Sphynx', url: 'https://en.wikipedia.org/wiki/Sphynx_cat' },
                  tonkinese = { name: 'Tonkinese', url: 'https://en.wikipedia.org/wiki/Tonkinese_cat' },
                  turkishAngora = { name: 'Turkish Angora', url: 'https://en.wikipedia.org/wiki/Turkish_Angora' },
                  turkishVan = { name: 'Turkish Van', url: 'https://en.wikipedia.org/wiki/Turkish_Van' }];





//---------- FUNCTION DEFINITIONS ----------//

// Select random array element (for getting random cat breed)
// Uses recursion to prevent returning the same value twice in a row
// Takes an array and currentWord as arguments
function getRandomArrayElement(myArray, currentWord) {
  var newWord = myArray[Math.floor(Math.random() * myArray.length)];
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
  cat = getRandomArrayElement(catBreeds, obj.currentWord);
  obj.currentWord = cat.name.toUpperCase();
  console.log(obj.currentWord); // for testing

  // Show unknown word as series of underscores
  obj.hiddenWord = obj.getHiddenWord();
  currentWordPara.innerHTML = obj.displayHiddenWord();
}

//---------- END FUNCTION DEFINITIONS ----------//


//---------- GAME OBJECT DEFINITION ----------//
var game = {
  maxWrongGuesses: 7,
  guessesRemaining: 0,
  isSolved: false,
  wins: 0,
  cat: {},
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
  getHiddenWord: function () {
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
  displayHiddenWord: function () {
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
  updateHiddenWord: function (letter) {
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
      h2Result.innerHTML = `You guessed <a href='${cat.url}' target='_blank' 
                            rel='noopener noreferrer'>${this.currentWord}</a>!`;
    }
    else {
      this.angryMeow.play();
      h1.innerHTML = "YOU LOSE";
      gamePrompt.innerHTML = 'Better luck next time!';
      h2Result.innerHTML = `The correct answer was:<br><a href='${cat.url}' target='_blank' 
                            rel='noopener noreferrer'>${this.currentWord}</a>`;
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
    game.hiddenWord = game.updateHiddenWord(guess);
    game.lettersGuessed.push(guess);
    currentWordPara.innerHTML = game.displayHiddenWord();
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
