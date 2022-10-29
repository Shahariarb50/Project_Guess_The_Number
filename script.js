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
// console.log(playerScore);
// const randomNumber = Math.trunc(Math.random() * 2) + 1;
let inputValue = 0;
let score = 20;
let playerHighScrore = 0;
console.log(inputValue);
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
// playAgain.addEventListener('click',function(){
//     guess.textContent = 'Start Guess A Number Btween 1 to 20'
//     playerScore.textContent = 'Score = 20'
//     const randomNumber = Math.trunc(Math.random() * 2) + 1;
//     player1Input.disabled = false
//     player2Input.disabled = false
// })
playerWithFriend.addEventListener("click", function () {
  const randomNumber = Math.trunc(Math.random() * 2) + 1;
  allButton.style.display = "none";
  playWithFriend.style.display = "inline";
  life.style.color = "#ff005d";
  if (randomNumber === 1) {
    player2Input.disabled = true;
    player1Submit.addEventListener("click", function () {
      inputValue = Number(player1Input.value);
      console.log(inputValue);
      if (!Number(player1Input.value)) {
        guess.textContent = "Empty Box Not Allow !";
        player1Input.disabled = false;
      } else {
        player1Input.disabled = true;
        player2Input.disabled = false;
        player2Submit.addEventListener("click", function () {
          if (inputValue === Number(player2Input.value)) {
            screen.textContent = inputValue;
            guess.textContent = "🎉You Guess The Correct Number !";
            player1Input.type = "text";
            player2Input.type = "text";
            player2Input.disabled = true;
            if (score > playerHighScrore) {
              playerHighScrore = score;
              highScore.textContent = `🥳Current High Score = ${playerHighScrore} (Player2)`;
            }
          } else if (inputValue < Number(player2Input.value)) {
            guess.textContent = "😑Your Number Is High";
            player2Input.value = "";

            score >= 5 ? (score -= 5) : (score = 0);
            if (score === 15) {
              lifeFour.style.color = "#f0f8ff";
              playerScore.textContent = `Score = ${score} (Player1)`;
            } else if (score === 10) {
              lifeThree.style.color = "#f0f8ff";
              playerScore.textContent = `Score = ${score} (Player1)`;
            } else if (score === 5) {
              lifeTwo.style.color = "#f0f8ff";
              playerScore.textContent = `Score = ${score} (Player1)`;
            } else {
              lifeOne.style.color = "#f0f8ff";
              player1Input.disabled = true;
              screen.textContent = "Lost!";
              screen.style.fontSize = "50px";
              player1Input.type = "text";
              guess.textContent = "Player 1 Lost The Game !";
              playerScore.textContent = `Score = ${score} (Player2)`;
              highScore.textContent = `🥳Current High Score = ${score} (Player2)`;
            }
          } else {
            guess.textContent = "😑Your Number Is Low";
            player2Input.value = "";
            score >= 5 ? (score -= 5) : (score = 0);
            if (score === 15) {
              lifeFour.style.color = "#f0f8ff";
              playerScore.textContent = `Score = ${score} (Player2)`;
            } else if (score === 10) {
              lifeThree.style.color = "#f0f8ff";
              playerScore.textContent = `Score = ${score} (Player2)`;
            } else if (score === 5) {
              lifeTwo.style.color = "#f0f8ff";
              playerScore.textContent = `Score = ${score} (Player2)`;
            } else {
              lifeOne.style.color = "#f0f8ff";
              player1Input.disabled = true;
              screen.textContent = "Lost!";
              screen.style.fontSize = "50px";
              player1Input.type = "text";
              guess.textContent = "Player 1 Lost The Game !";
              playerScore.textContent = `Score = ${score} (Player2)`;
              highScore.textContent = `🥳Current High Score = ${playerHighScrore} (Player2)`;
              player2Input.disabled = true;
            }
          }
        });
      }
    });
  } else {
    player1Input.disabled = true;
    player2Submit.addEventListener("click", function () {
      inputValue = Number(player2Input.value);
      console.log(inputValue);
      if (!Number(player2Input.value)) {
        guess.textContent = "😒Empty Box Not Allow !";
        // player1Input.disabled = true
        player2Input.disabled = false;
      } else {
        player2Input.disabled = true;
        player1Input.disabled = false;
        player1Submit.addEventListener("click", function () {
          if (inputValue === Number(player1Input.value)) {
            screen.textContent = inputValue;
            guess.textContent = "🎉You Guess The Correct Number !";
            player1Input.type = "text";
            player2Input.type = "text";
            player1Input.disabled = true;
            playerScore.textContent = `Score = ${score} (Player1)`;
            if (score > playerHighScrore) {
              playerHighScrore = score;
              highScore.textContent = `🥳Current High Score = ${playerHighScrore} (Player1)`;
            }
          } else if (inputValue < Number(player1Input.value)) {
            guess.textContent = "😑Your Number Is High";
            player1Input.value = "";
            score >= 5 ? (score -= 5) : (score = 0);
            if (score === 15) {
              lifeFour.style.color = "#f0f8ff";
              playerScore.textContent = `Score = ${score} (Player1)`;
            } else if (score === 10) {
              lifeThree.style.color = "#f0f8ff";
              playerScore.textContent = `Score = ${score} (Player1)`;
            } else if (score === 5) {
              lifeTwo.style.color = "#f0f8ff";
              playerScore.textContent = `Score = ${score} (Player1)`;
            } else {
              lifeOne.style.color = "#f0f8ff";
              player1Input.disabled = true;
              screen.textContent = "Lost!";
              screen.style.fontSize = "50px";
              player2Input.type = "text";
              guess.textContent = "Player 1 Lost The Game !";
              playerScore.textContent = `Score = ${score} (Player1)`;
              highScore.textContent = `🥳Current High Score = ${score} (Player1)`;
            }
          } else {
            guess.textContent = "😑Your Number Is Low";
            player1Input.value = "";
            score >= 5 ? (score -= 5) : (score = 0);
            if (score === 15) {
              lifeFour.style.color = "#f0f8ff";
              playerScore.textContent = `Score = ${score} (Player1)`;
            } else if (score === 10) {
              lifeThree.style.color = "#f0f8ff";
              playerScore.textContent = `Score = ${score} (Player1)`;
            } else if (score === 5) {
              lifeTwo.style.color = "#f0f8ff";
              playerScore.textContent = `Score = ${score} (Player1)`;
            } else {
              lifeOne.style.color = "#f0f8ff";
              player1Input.disabled = true;
              screen.textContent = "Lost!";
              screen.style.fontSize = "50px";
              player2Input.type = "text";
              guess.textContent = "Player 1 Lost The Game !";
              playerScore.textContent = `Score = ${score} (Player1)`;
              highScore.textContent = `🥳Current High Score = ${score} (Player1)`;
            }
          }
        });
      }
    });
  }
});
