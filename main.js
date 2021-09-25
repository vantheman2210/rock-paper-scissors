// Variables to keep track of scores.
let options = document.querySelectorAll(".options");  
let userScore = 0; 
let computerScore = 0;    

//Function that assigns player and computer choice. It also plays game inside HTML.
options.forEach((option) => { 
   option.addEventListener("click", function () { 
     let playerSelection = this.textContent;  
     console.log(playerSelection);

  let myList = ["ROCK", "PAPER", "SCISSORS"]; 
  let computerSelection = myList[Math.floor(Math.random() * myList.length)];    
  console.log(computerSelection);  

  playRound(playerSelection, computerSelection);  
  updateScore();   
  if(endGame()) {  
    userScore = computerScore = 0; 
    updateScore();
  }  
   }) 
});


// Function that plays one round of rock-paper-scissors game.
function playRound (playerSelection, computerSelection) {  

  if (playerSelection === "ROCK" && computerSelection === "PAPER") { 
    alert ("You Lose! Paper beats Rock.");  
    computerScore++;
  } else if (playerSelection === "ROCK" && computerSelection === "ROCK") { 
    alert ("It's a draw."); 
  }
    else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") { 
    alert ("You win! Rock beats Scissors.");  
    userScore++; 
  } 
  
  if (playerSelection === "PAPER" && computerSelection === "PAPER") { 
    return "It's a draw.";
  } else if (playerSelection === "PAPER" && computerSelection === "ROCK") { 
    alert ("You win! Paper beats Rock.");  
    userScore++;
  } else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") { 
    alert ("You Lose! Scissors beats Paper.");  
    computerScore++;
  } 

  if (playerSelection === "SCISSORS" && computerSelection === "PAPER") { 
    alert ("You win! Scissors beats paper.");  
    userScore++; 
  } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") { 
    alert ("You Lose! Rock beats scissors.");  
    computerScore++; 
  } else if (playerSelection === "SCISSORS" && computerSelection === "SCISSORS") { 
    return "It's a draw";
  }
}   

// Function that updates html score
function updateScore () { 
  document.getElementById("userScore").textContent = userScore;
  document.getElementById("computerScore").textContent = computerScore;
}

//Function that determines winner 
function endGame () { 
  if (userScore === 5) {   
    alert ("You win.");
    return true; 
  } else if (computerScore === 5) { 
    alert ("You lose. Computer wins.") 
    return true;
  } return false;
}