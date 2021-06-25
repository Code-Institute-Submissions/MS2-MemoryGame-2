# Motaz Abdou - Milestone Project 2 - Memory Game
Memory Game  

  

[Link to Live Website](https://motazabdou.github.io/MS2-MemoryGame/)

  

[GitHub Repo](https://github.com/motazabdou/MS2-MemoryGame) 

  

***  

## Index – Table of Contents 

* [About](#About)

* [Game Layout](#Game-Layout) 

* [Game Requirements](#Game-Requirements)

* [Logic](#Game-Logic)

* [User Stories](#user-stories)

* [Features](#features) 

* [Technologies Used](#technologies-used) 

* [Testing](#testing) 

* [Deployment](#deployment) 

* [Acknowledgements](#credits)

***

  

## About   

  

This is a simple Memory Game Web Application created for my MS2 project with Code Institute. The game is designed to test a user's memory and is made up of a deck of cards, each card containing an image assigned randomly.

<p align="center">
   <img src="images/appScreenshot.png" alt="screenshot of memory game"/>
</p>

 ## Challenge
 
 The challenge is to match all the cards in as little time as possible, making the fewest selections possible

*** 

## Instructions

* Click on a card

* Continue revealing cards and working your memory to remember each unveiled card.

* Match cards properly with less moves and in faster time

 ***

## Game Layout

The game is made up of a single page containing a header, a score panel that keeps tabs of performance indicators such as the time, the number of moves and the current star rating of the user, depending on the performance, and also contains the reset button.

The game board is made up of a deck div containing 16 cards which were created dynamically in javascript. Each card consists of a front face and a backface. On card hover, the card background lightens upslightly, and on card click, the card flips 180 degrees and reveals the image behind it, which the user then needs to memorise to improve performance. 

The primary colours used in my palette were three shades of green, two shades of yellow/orange, on a green & black vector background. The cards have an image of a vector cartoon animal to convey a more "game" feel, as well as careful choice of multi-coloured vector icons on the backface of the cards to ensure some colour diversity while maintaining a three-coloured theme. 


<p align="center">
   <img src="images/palette.png" alt="screenshot of colour palette"/>
</p>

A "Win-Game" Modal appears in the center of the screen upon completion of the game, providing feedback concerning grade, star rating and time taken to complete the game.

The deck of cards was designed using CSS grid, in order to ensure responsiveness

***

## Game Requirements

* On load or restart, the cards must be shuffled and a random array of images is to be generated.

* The game needs to be able to handle both matched and unmatched cards.

* Cards need to make a sound when flipped, a success sound when they match, an error sound when unmatched and a victory sound when game is completed.

* Game should be able to display the number of moves or clicks a user has made.

* Game must display a timer that starts when the first click is made, and ends when the last pair of cards has been matched.

* Game should be able to display a star rating that indicates a user's performance, based on the number of moves made.

* The more moves a user makes, the user rating decreases. 

* A reset button that shuffles the images array, resets timer and star rating, and reassigns those reshuffled images to the cards.

* A win game modal displayed when the game is completed to congratulate the user.

* Win Game modal is updated with user's game stats and displayed at the end of the game to provide feedback. 

* Win game modal needs to have the option to ask the user to play again.

***
 
## Game Logic 

* An array that stores the image paths, which will be assigned to the cards and displayed on their backfaces.

* An array that stores opened cards and an array that stores matched cards.

* Function that shuffles the images array when the game is loaded

* A function that initiates the game which invokes the shuffle function, assigns random image onto each individual card and appends cards to the deck.

* A timer function which is called in the card eventListener that updates the innerHTML every 1 second interval from the moment a card is clicked.

* A stopTime function that clears the time function interval.

* A reset function that resets all global variables and the content of HTML elements (timer, stars, moves, and their innerHTML) and empties all arrays.

* A movesCounter function that updates the number of moves made.

* A function that updates the star rating depending on the number of moves the player has made to complete the Game. 

* The number of starts will decrease the more moves a player makes. 

* A function that compares two cards in the openedCards array when its length is 2, and decides whether they're a match or a noMatch.

* If they match, they will be pushed to the matched cards array, otherwise they will be removed from the openedCards array.

* A function that fetches the player stats, and provides appropriate feedback based on the stats.

* A function that displays the win-game modal.

* A Win-game function that displays the win-game modal when game is completed, and calls the stats function and stoptimer function.

* A function that handles clicked cards, applies flip animation, plays audio reveals backface and adds card content to openedCards array.

***

## User Stories
As a user, I would like to:

* See a visually appealing, challenging game!
* Be able to be 'competitive' and beat my own scores.
* Click on any card as first card and clicked card should turn.
* Click any card as second card and clicked card should turn.
* Be given rewarding feedback when cards match (colour scheme change and sound feedback) and cards remain visible.
* See cards flip back when there is no match, and be given feedback to indicate no match.
* Know the number of moves I have made so far and how long it has been since I started the game.
* Get confirmation and performance feedback when the game is finished.
* Have the option to play again, and reset card deck.

***

## Features
### Existing features
#### Home
* Instructions modal.
* Call to action: Encourage the user to take action. In this case start the game.

#### Game page
* Game tiles: clickable, turn on click.
* Game logic: in case there is a match, the cards animate and remain visible.
* Moves counter: after each move (when two cards turned) the counter updates.
* Game over modal.
* Congratulations header.
* Call to action: encourage the user to take action. In this case restart the game.
* Evaluation/feedback messages: depending on performance.
* Call to action: Encourage the user to take action. In this case to try again and beat your best score.
* Reset score: Restart the game again at any stage.

#### Features that can be implemented
* High score board: show all time statistics of all users.
* More game difficulty modes.
* Timed mode: add a timer to make the game more challenging, i.e. finish game before timer runs out.

***

## Technologies Used
* HTML
* CSS
* Javascript
* Google Fonts
* Font Awesome Library
* Chrome Developer Tools
* Markup Validation Service
* CSS Validation Service
* JSHint
* Am I responsive

***

## Testing

## Deployment

## Credits
