window.addEventListener("DOMContentLoaded", function(){
  // declaring some global variables

  // array of images to be stored in the individual cards
  const deckCards = ["balloon.png", "basketball.png", "cake.png", "camera.png", "car.png", "dog.png", "leprechaun.png", "tree.png",
    "balloon.png", "basketball.png", "cake.png", "camera.png", "car.png", "dog.png", "leprechaun.png", "tree.png"
  ];

  // selecting <ul> with class of deck
  const deck = document.querySelector(".deck");

  // empty array to store openedCards cards
  let openedCards = [];

  // empty array to store matching cards
  let matched = [];

  // selecting the modal
  const modal = document.getElementById("modal");

  // selecting reset button
  const reset = document.querySelector(".reset-btn");

  // selecting play-again button
  const playAgain = document.querySelector(".play-again-btn");

  // selecting the moves counter, which will have its innerHTML changed depending on number of moves made
  const movesCount = document.querySelector(".moves-counter");

  // create variable for the number of moves made (cards clicked), starting at 0
  let moves = 0;

  // selecting the stars to give the player a rating
  const star = document.getElementById("star-rating").querySelectorAll(".star");

  let starCount = 3;

  // selecting timer
  const timeCounter = document.querySelector(".timer");

  let time;
  let minutes = 0;
  let seconds = 0;
  let timeStart = false;
});