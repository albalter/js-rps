
let humanScore = 0;
let computerScore = 0;
let humanSelection = '';
const CHOICES = ["rock", "paper", "scissors"];

const buttons = document.querySelectorAll("button")
buttons.forEach((button) =>{
    button.addEventListener("click", () => {
        humanSelection=button.id;

        const computerSelection = getComputerChoice();

        playRound(computerSelection, humanSelection);
        updateScores();
        
        console.log(`computer's move: ${computerSelection}`);
        console.log(`Your move: ${humanSelection}`)

    });
});


function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * CHOICES.length);
    return CHOICES[randomIndex];
}

function getHumanChoice () {
   return humanSelection;
}

function playRound(computerSelection, humanSelection) {
  if (humanSelection !== computerSelection){
    if (humanSelection ==="rock" && computerSelection==="paper") {
        computerScore += 1;
    } else if (humanSelection === "rock" && computerSelection==="scissors"){
        humanScore += 1;
    }
        
    if (humanSelection ==="scissors" && computerSelection ==="paper"){
        humanScore+=1
    } else if (humanSelection === "scissors" && computerSelection==="rock") {
        computerScore +=1
    }

    if (humanSelection ==="paper" && computerSelection ==="rock") {
        humanScore += 1
    } else if (humanSelection==="paper" && computerSelection==="scissors"){
        computerScore +=1
    }
  } else {
    console.log("This round was tied. Scores unchanged.")
  } 
}

function resetMatch() {
   humanScore = 0;
   computerScore = 0;
   humanSelection ='';
   updateScoreBoardUI(humanScore, computerScore);
}

function updateScoreBoardUI(humanScore, computerScore){
   const displayPlayerScore = document.getElementById("playerScore");
   const displayComputerScore = document.getElementById("computerScore");
   const messageBoard = document.getElementById("message")
   displayPlayerScore.textContent = humanScore;
   displayComputerScore.textContent = computerScore;

   messageBoard.textContent = `Your score is: ${humanScore}, computer's score is: ${computerScore}`
   
}

function updateScores() {
    updateScoreBoardUI(humanScore, computerScore)
    if (humanScore == 5) {
        alert(`Congratulations! \\(-o-)/ You've won the match! Your final score is: ${humanScore} vs the computer:${computerScore}. Re-setting the game...`);
        resetMatch();
   } else if (computerScore == 5) {
        alert (`Regrettably, the computer has won. Yay computer! \\(-o-)/. Your final score is: ${humanScore} vs the computer:${computerScore}. Re-setting the game.`);
        resetMatch();
   }
}

function playGame() {
    
    /*
    playRound(computerSelection, humanSelection);
    updateScores();
    console.log(`computer's move: ${computerSelection}`);
    console.log(`Your move: ${humanSelection}`)
    console.log(`Your score is: ${humanScore}, computer's score is: ${computerScore}`)
    */
    /*
    if (humanScore > computerScore){
        console.log();
    } else if (humanScore < computerScore) {
        console.log("");
    } else {
        console.log ("It's a tie.");
    }
    */
}

//playGame();
