const playerWithFriend = document.querySelector(
  "body .all-button .first-button"
);
const playerWithComputer = document.querySelector(
  "body .all-button .second-button"
);
const allButton = document.querySelector("body .all-button");
const playWithFriend = document.querySelector("body .play-with-friend ");
const life = document.querySelector("body .life");
const player1Input = document.querySelector(
  "body .play-with-friend .input-box-friend .player-one input"
);
const player2Input = document.querySelector(
  "body .play-with-friend .input-box-friend .player-two input"
);
const player1Submit = document.querySelector(
  "body .play-with-friend .input-box-friend .player-one .frist-submit"
);
const player2Submit = document.querySelector(
  "body .play-with-friend .input-box-friend .player-two .second-submit"
);
const screen = document.querySelector("body .play-with-friend .screen");
const guess = document.querySelector("body .play-with-friend .guess");
const lifeOne = document.querySelector("body .life .one");
const lifeTwo = document.querySelector("body .life .two");
const lifeThree = document.querySelector("body .life .three");
const lifeFour = document.querySelector("body .life .four");
const playerScore = document.querySelector(
  "body .play-with-friend .player-score"
);
const highScore = document.querySelector("body .play-with-friend .high-score");
const playAgain = document.querySelector("body .play-with-friend .play-again");
const body = document.querySelector("body");
// console.log(playerScore);
// const randomNumber = Math.trunc(Math.random() * 2) + 1;
// let inputValue1 = 0;
// let inputValue2 = 0;
let score = 20;
let playerHighScrore = 0;
// console.log(inputValue1);
let playerByttonNumber = 0;
const playerButtonBorder = function (border) {
  playerByttonNumber > 1
    ? (playerWithComputer.style.border = border)
    : (playerWithFriend.style.border = border);
};
playerWithFriend.addEventListener("mouseover", function () {
  playerByttonNumber = 1;
  playerButtonBorder("1px solid black");
  playerWithFriend.addEventListener("mouseout", function () {
    playerButtonBorder("none");
  });
});
playerWithComputer.addEventListener("mouseover", function () {
  playerByttonNumber = 2;
  console.log(playerByttonNumber);
  playerButtonBorder("1px solid black");
  playerWithComputer.addEventListener("mouseout", function () {
    playerButtonBorder("none");
  });
});
const scoreValue = function (input1, input2, player) {
  console.log(input1);
  console.log(input2);
  if (Number(input1) > Number(input2)) {
    guess.textContent = "😑Your Number Is Low";
  } else {
    guess.textContent = "😑Your Number Is High";
  }

  score > 5 ? (score -= 5) : (score = 0);
  if (score === 15) {
    lifeFour.style.color = "#f0f8ff";
    playerScore.textContent = `Score = ${score} ${player}`;
    // input1 = 0;
    // input2 = 0;
  } else if (score === 10) {
    lifeThree.style.color = "#f0f8ff";
    playerScore.textContent = `Score = ${score} ${player}`;
    // input1 = 0;
    // input2 = 0;
  } else if (score === 5) {
    lifeTwo.style.color = "#f0f8ff";
    playerScore.textContent = `Score = ${score} ${player}`;
    // input1 = 0;
    // input2 = 0;
  } else {
    lifeOne.style.color = "#f0f8ff";
    screen.textContent = "Lost!";
    screen.style.fontSize = "50px";
    player1Input.type = "text";
    guess.textContent = "Player 1 Lost The Game !";
    playerScore.textContent = `Score = ${score} ${player}`;
    highScore.textContent = `🥳Current High Score = ${score} ${player}`;
    player1Input.disabled = true;
    player2Input.disabled = true;
    // input1 = 0;
    // input2 = 0;
  }
};
const playerSubmitFunction = function (playerSubmit, input1, input2, player) {
  let inputValue1 = Number(input1.value);
  if (!inputValue1) {
    guess.textContent = "Empty Box Not Allow !";
    input1.disabled = false;
  } else {
    input1.disabled = true;
    input2.disabled = false;
    playerSubmit.addEventListener("click", function () {
      let inputValue2 = Number(input2.value);
      if (inputValue1 === inputValue2) {
        console.log(inputValue1);
        console.log(inputValue2);
        screen.textContent = inputValue1;
        guess.textContent = "🎉You Guess The Correct Number !";
        input1.type = "text";
        input2.type = "text";
        input1.disabled = true;
        input2.disabled = true;
        if (score > playerHighScrore) {
          playerHighScrore = score;
          highScore.textContent = `🥳Current High Score = ${playerHighScrore} ${player}`;
        }
      } else {
        scoreValue(inputValue1, inputValue2, player);
      }
    });
  }
};
playerWithFriend.addEventListener("click", function () {
  const randomNumber = Math.trunc(Math.random() * 2) + 1;
  // const randomNumber = 1;
  allButton.style.display = "none";
  playWithFriend.style.display = "inline";
  life.style.color = "#ff005d";
  if (randomNumber === 1) {
    player2Input.disabled = true;
    player1Submit.addEventListener("click", function () {
      playerSubmitFunction(
        player2Submit,
        player1Input,
        player2Input,
        "player2"
      );
    });
  } else {
    player1Input.disabled = true;
    player2Submit.addEventListener("click", function () {
      playerSubmitFunction(
        player1Submit,
        player2Input,
        player1Input,
        "player1"
      );
    });
  }
});

playAgain.addEventListener("click", function () {
  player1Input.value = null
  player2Input.value = null
  console.log(player1Input.value);
  console.log(player2Input.value);
  guess.textContent = "Start Guess A Number Btween 1 to 20";
  playerScore.textContent = "Score = 20";
  screen.textContent = "?";
  player1Input.value = "";
  player2Input.value = "";
  score = 20;
  playerHighScrore = 0;
  const randomNumber = Math.trunc(Math.random() * 2) + 1;
  // const randomNumber = 2;
  // console.log(randomNumber);
  if (randomNumber === 1) {
    player1Input.disabled = false;
    player2Input.disabled = true;
    player1Submit.addEventListener("click", function () {
        playerSubmitFunction(
          player2Submit,
          player1Input,
          player2Input,
          "player2"
        );
      });
  } else {
    player2Input.disabled = false;
    // player1Input.value = "";
    player1Input.disabled = true;
    player2Submit.addEventListener("click", function () {
      playerSubmitFunction(
        player1Submit,
        player2Input,
        player1Input,
        "player1"
      );
    });
  }
});
