# Motaz Abdou - Milestone Project 2 - Memory Game
Memory Game  

  

[Link to Live Website](https://motazabdou.github.io/MS2-MemoryGame/)

  

[GitHub Repo](https://github.com/motazabdou/MS2-MemoryGame) 

  

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

The game board is made up of a deck div containing 16 cards which were created dynamically in javascript. Each card consists of a front face and a backface. On card hover, the card background lightens upslightly, and on card click, the card flips 180 degrees and reveals the image behind it, which the user then needs to memorise to improve performance. The colour palette of my choice consisted of a green & black vector background, and cards that have an image of a vector cartoon animal to convey a more "game" feel, as well as careful choice of multi-coloured vector icons on the backface of the cards to ensure a colour diversity while maintaining a three-coloured theme. 

A "Win-Game" Modal appears in the center of the screen upon completion of the game, providing feedback concerning grade, star rating and time taken to complete the game.

The deck of cards was designed using CSS grid, in order to ensure responsiveness

***

## Game Requirements

* On load or restart, the cards must be shuffled and a random array of images is to be generated.
* The game needs to be able to handle both matched and unmatched cards.
* Cards need to make a sound when flipped, a different sound when they match, an "incorrect" sound when unmatched and a victory sound when game is completed.
* Game should be able to display the number of moves or clicks a user has made.
* Game must display a timer that starts when the first click is made, and ends when the last pair of cards has been matched.
* Game should be able to display a star rating that indicates a user's performance, based on the number of moves made. 
* A reset button that shuffles the images array, resets timer and star rating, and reassigns those random images to the cards.
* A win game modal displayed when the game is completed to congratulate the user.
* Win Game modal is updated with user's game stats and displayed at the end of the game to provide feedback. 
* Win game modal needs to have the option to ask the user to play again.

***
 
## Logic / Game Process

* An array that stores the images that will be displayed on the cards.
* An array that stores opened cards and an array that stores matched cards.
* Function that shuffles the images array when the game is loaded
* A function that initiates the game which invokes the shuffle function, assigns random image onto each individual card and appends cards to the deck.
* A timer function which is called in the card eventListener that updates the innerHTML every 1000ms interval from the moment a card is clicked.
* A stopTime function that clears the time function interval.
*  
