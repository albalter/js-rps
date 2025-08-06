let humanScore = 0;
let computerScore = 0;
let roundsPlayed =0;

function getComputerChoice() {
    choice = Math.floor(Math.random()*3)+1;
    switch (choice){
        case 1: return "rock";
        case 2: return "paper";
        case 3: return "scissors";
    }
};

function getHumanChoice () {
   return prompt ("Please enter your move (rock, paper or scissors)").toLowerCase();
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
    console.log("This round was tied.")
  }
  roundsPlayed+=1;   
}

function playGame() {
    for (let i = 0; i<5; i++){
        const computerSelection = getComputerChoice();
        const humanSelection = getHumanChoice();

        playRound(computerSelection, humanSelection);

        console.log(`computer's move: ${computerSelection}`);
        console.log(`Your move: ${humanSelection}`)
        console.log(`Your score is: ${humanScore}, computer's score is: ${computerScore}`)
    }
    if (humanScore > computerScore){
        console.log("Congratulations! You've won!");
    } else if (humanScore < computerScore) {
        console.log("Regrettably, the computer has won. Yay computer! (-0-)");
    } else {
        console.log ("It's a tie.");
    }
}

playGame();
