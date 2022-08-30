const choices = document.getElementsByClassName("choice");
const choicesPc = document.getElementsByClassName("choice-pc");
let res = document.getElementById("result");
let playerScore = 0;
let pcScore = 0;

console.log(choices.length);
function playerChoice(picked) {
  let computer = document.getElementById("computer-score");
  let player = document.getElementById("your-score");
  for (let i = 0; i < choices.length; i++) {
    if (i == picked) {
      choices[i].classList.add("appear");
    } else {
      choices[i].classList.remove("appear");
    }
  }
  let pcChoice = Math.floor(Math.random() * 3);

  for (let i = 0; i < choices.length; i++) {
    if (i == pcChoice) {
      choicesPc[i].classList.add("appear");
    } else {
      choicesPc[i].classList.remove("appear");
    }
  }

  if (pcChoice == 0) {
    if (picked == 1) {
      res.textContent = "You Win";
      playerScore++;
      player.textContent = playerScore.toString(10);
    } else if (picked == 2) {
      res.textContent = "You Lose";
      pcScore++;
      computer.textContent = pcScore.toString(10);
    }
  }

  if (pcChoice == 1) {
    if (picked == 2) {
      res.textContent = "You Win";
      playerScore++;
      player.textContent = playerScore.toString(10);
    } else if (picked == 0) {
      res.textContent = "You Lose";
      pcScore++;
      computer.textContent = pcScore.toString(10);
    }
  }
  if (pcChoice == 2) {
    if (picked == 0) {
      res.textContent = "You Win";
      playerScore++;
      player.textContent = playerScore.toString(10);
    } else if (picked == 1) {
      res.textContent = "You Lose";
      pcScore++;
      computer.textContent = pcScore.toString(10);
    }
  }

  if (pcChoice == picked) {
    res.textContent = "Tie";
  }
}

function reset() {
  let computer = document.getElementById("computer-score");
  let player = document.getElementById("your-score");
  playerScore = 0;
  pcScore = 0;
  computer.textContent = pcScore.toString(10);
  player.textContent = playerScore.toString(10);
  res.textContent = "";

  for (let i = 0; i < 3; i++) {
    if (i == 0) {
      choicesPc[i].classList.add("appear");
      choices[i].classList.add("appear");
    } else {
      choicesPc[i].classList.remove("appear");
      choices[i].classList.remove("appear");
    }
  }
}
