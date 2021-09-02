// Variables to keep track of scores.
let userScore = 0; 
let computerScore = 0;  

//Function that randomly chooses computer selection.
function computerPlay() { 
  let myList = ["Rock", "Paper", "Scissors"]; 
  let list = myList[Math.floor(Math.random() * myList.length)];   
  return list;
}  

// Function that plays one round of rock-paper-scissors game.
function playRound () {     
  
  //Variable that stores user Selection.
  let playerSelection = prompt("User input: ").toLowerCase(); 
  // Variable that stores result of computerPlay() function.
  let computerSelection = computerPlay();  

  if (playerSelection === "rock" && computerSelection === "Paper") { 
    return computerScore++, "You Lose! Paper beats Rock.";
  } else if (playerSelection === "rock" && computerSelection === "Rock") { 
    return "It's a draw.";
  } else if (playerSelection === "rock" && computerSelection === "Scissors") { 
    return userScore++, "You win! Rock beats Scissors." 
  } 

  if (playerSelection === "paper" && computerSelection === "Paper") { 
    return "It's a draw.";
  } else if (playerSelection === "paper" && computerSelection === "Rock") { 
    return userScore++, "You win! Paper beats rock." 
  } else if (playerSelection === "paper" && computerSelection === "Scissors") { 
    return computerScore++, "You lose! Scissors beat paper."
  } 

  if (playerSelection === "scissors" && computerSelection === "Paper") { 
    return userScore++, "You win! Scissors beats paper." 
  } else if (playerSelection === "scissors" && computerSelection === "Rock") { 
    return computerScore++, "You lose! Rock beats scissors." 
  } else if (playerSelection === "scissors" && computerSelection === "Scissors") { 
    return "It's a draw";
  }
}  

// Function that plays multiple rounds of rock-paper-scissors game, until it stops after 5 rounds.
function game () {   
  console.log(playRound());  
  console.log(userScore, computerScore);
   if (userScore < 3 && computerScore < 3) { 
     game() 
   } else { 
     endGame();
   }
   
  }

  // Function that declares winner of the game.
function endGame() { 
  if (userScore > computerScore) { 
    console.log("Game over. You win!");
  } else { 
    console.log("Game over. You lose!")
  }
}
game(); 
console.log(userScore, computerScore);