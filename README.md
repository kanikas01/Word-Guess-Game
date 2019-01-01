# Word-Guess-Game

Assignment 3 - Word Guess Game

This is a simple hangman application where the user tries to guess different cat breeds. At the end of each round, a link to the wikipedia page for the cat breed from that round is displayed in a list so that players can learn more about each breed, as many of these breeds are probably unknown to the general public.

Core gameplay is controlled by the file [game.js](assets/javascript/game.js).  This files largely relies on an object-oriented approach, encapsulating the majority of gameplay functionality inside of a game object.

There is also another JavaScript file in the repository named [game-non-object.js](assets/javascript/game-non-object.js).  Most gamplay functionality was originally developed in this file using a non-object-oriented approach.  However, I stopped updating this file when I switched to the object-oriented version, so it does not have all of the features present in the final version, and may not play well with the css currently used to style the page.  I have left it in the repository purely as a reference.

The bootstrap framework is used for some basic styling - primarily the header and footer. An external css file controls the remainder of the styling, and the main layout is created using a css grid.