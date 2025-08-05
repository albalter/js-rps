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
   return prompt ("Please enter your move (rock, paper or scissors)").toLowerCase;
}

const humanSelection = getHumanChoice()
const computerSelection = getComputerChoice();

function playRound(computerChoice, humanChoice) {
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

    if (humanSelection ==="paper" && computerSelection ==="rock"){
        humanScore += 1
    } else is (humanSelection==="paper" && computerSelection==="scissors"){
        computerScore +=1
    }
  }
  roundsPlayed+=1;
    
}


console.log(`computer's move: ${computerSelection}`);
console.log(`Your move: ${humanSelection}`)
