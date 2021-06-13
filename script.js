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

  /* create a function that shuffles the array every time the game is started
  function will have a random number, a temporary variable which will be storing the value of the array at the current iteration
  it will then pull out the value of the shuffledDeck at a random iteration and will swap it with the current iteration value (stored at temporary variable)
  it will continue to loop through the array and repeat the same process, producting a randomly shuffled array 
  function will then return the shuffled array */
  function shuffle(arr) {
    for (let i = 0; i < arr.length; i++) {

      let randomNumber = Math.floor(Math.random() * arr.length);

      let temp = "";
      let current = arr[i];
      let randomElement = arr[randomNumber];

      temp = current;
      arr[i] = randomElement;
      arr[randomNumber] = temp;
    }
    return arr;
  }

  function startGame() {
    // Invoke shuffle function created earlier and store in variable
    const shuffledDeck = shuffle(deckCards);

    // Iterate over deck of cards array
    for (let i = 0; i < shuffledDeck.length; i++) {
      // at each iteration, create a <li> tag
      const liTag = document.createElement("li");
      // Give <li> class of card
      liTag.classList.add("card");
      // Create an <img> tag
      const addImage = document.createElement("img");
      // Append <img> to <li> tag
      liTag.appendChild(addImage);
      // Set the img src path with the shuffled deck
      addImage.setAttribute("src", "images/" + shuffledDeck[i]);
      // Add an alt tag to the image
      addImage.setAttribute("alt", `Image of ${shuffledDeck[i]}`);
      // Append the new <li> tag to the deck
      deck.appendChild(liTag);
    }

    let cards = document.getElementsByClassName("card");
    for (let i = 0; i < cards.length; i++) {
      cards[i].addEventListener("click", function() {
        let flip = new Audio("sounds/flip.mp3");
        flip.play();
      });
    }
    
  }

  startGame();

  // create a function that removes cards. Function will be called upon reset
  function removeCard() {
    // As long as <ul> deck has a child node, remove the child node
    while (deck.hasChildNodes()) {
      deck.removeChild(deck.firstChild);
    }
  }

  /* Update the timer in the HTML for minutes and seconds
  The timer function is called in the event listener the first time a card is clicked. */
  function timer() {
    // Update the count every 1 second
    time = setInterval(function() {
      seconds++;
      if (seconds === 60) {
        minutes++;
        seconds = 0;
      }

      // Update the timer in HTML with the time it takes the user to play the game
      if (screen.width <= 500) {
        timeCounter.innerHTML = `<i class='fa fa-clock'></i> ${minutes} Mins ${seconds} Secs`;
      } else {
        timeCounter.innerHTML = `<i class='fa fa-clock' style="color: #1547C2;"></i><strong style="color: #1547C2;"> Time</strong>: ${minutes} Minutes ${seconds} Seconds`;
      }
    }, 1000);
  }

  // Create a function that stops the timer once all 16 cards are matched.
  function stopTime() {
    clearInterval(time);
  }

  // Create a function that resets all global variables and the content of HTML elements (timer, stars, moves, and their innerHTML)
  function resetEverything() {
    // Stop time, reset the minutes and seconds update the time inner HTML
    stopTime();
    timeStart = false;
    seconds = 0;
    minutes = 0;
    timeCounter.innerHTML = `<i class='far fa-clock' style="color: #1547C2;"></i> Timer: 00:00`;

    // Reset star count and the add the class back to show stars again
    star[1].firstElementChild.classList.add("fa-star");
    star[2].firstElementChild.classList.add("fa-star");
    starCount = 3;

    // Reset moves count and reset its inner HTML
    moves = 0;
    movesCount.innerHTML = 0;

    // Clear both arrays that hold the openedCards and matched cards
    matched = [];
    openedCards = [];

    // Clear the deck
    removeCard();

    // Create a new deck
    startGame();
  }

  /* Create a function that increments the moves counter, which is called at each comparison.
  for every two cards compared add one to the count. */
  function movesCounter() {
    // Update the html for the moves counter
    movesCount.innerHTML++;
    // Keep track of the number of moves for every pair checked
    moves++;
  }

  /* Create a function that updates the star rating depending on the number of moves the player has made to complete the Game
  the number of starts will decrease the more moves a player makes. */
  function starRating() {
    if (moves === 16) {
      // First element child is the <i> within the <li>
      star[2].firstElementChild.classList.remove("fa-star");
      starCount--;
      document.querySelector(".star").style.animation = "pulse2 1s";
    }
    if (moves === 20) {
      star[1].firstElementChild.classList.remove("fa-star");
      starCount--;
      document.querySelector(".star").style.animation = "pulse2 1s";
    }
  }

  // Create a function to compare two cards in the openedCards array to see if they match
  function compareTwo() {
    // When there are 2 cards in the openedCards array
    if (openedCards.length === 2) {
      // Disable any further mouse clicks on other cards
      document.body.style.pointerEvents = "none";
    }
    // Compare the two images src
    if (openedCards.length === 2 && openedCards[0].src === openedCards[1].src) {
      // If matched call match()
      match();
    } else if (openedCards.length === 2 && openedCards[0].src != openedCards[1].src) {
      // If No match call noMatch()
      noMatch();
    }
  }


});