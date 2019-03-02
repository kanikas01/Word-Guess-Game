# Name the Cat

[Click here to view deployed project](https://kanikas01.github.io/name-the-cat/)

This is a simple hangman application where the user tries to guess different cat breeds. At the beginning of each new round, a link to the wikipedia page for the cat breed from the previous round is displayed in a list so that players can learn more about each breed.

Core gameplay is controlled by the file [game.js](assets/javascript/game.js).  The game largely relies on an object-oriented approach, encapsulating the majority of gameplay functionality in a 'game' object.

There is also another JavaScript file in the repository named [game-non-object.js](assets/javascript/game-non-object.js).  Most gamplay functionality was originally developed in this file using a non-object-oriented approach.  However, I stopped updating this file when I switched to the object-oriented version, so it does not have all of the features present in the final version, and may not play well with the css currently used to style the page.  I have left it in the repository purely as a reference.

The bootstrap framework is used for some basic styling - primarily the header and footer. An external css file controls the remainder of the styling, and the main layout is created using a css grid. The page is designed for play on a desktop or laptop; screen widths of less than 992px may result in odd text wrapping or element overlap.
