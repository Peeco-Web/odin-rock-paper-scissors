function getComputerChoice() {
    let randomChoice = Math.floor(Math.random()*3);
    let computerChoice = "";

    switch (randomChoice) {
        case 0:
            return "Rock";
        break;

        case 1:
            return "Paper";
        break;
        
        case 2:
            return "Scissors";
        break;
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == 'rock') {
        if (computerSelection.toLowerCase() == 'rock') {
            return "It's a Tie! Rock vs Rock."
        }
        else if (computerSelection.toLowerCase() == 'paper') {
            return "You Lose! Paper beats Rock."
        }
        else if (computerSelection.toLowerCase() == 'scissors') {
            return "You Win! Rock beats Scissors."
        }
    }

    if (playerSelection.toLowerCase() == 'paper') {
        if (computerSelection.toLowerCase() == 'rock') {
            return "You Win! Paper beats Rock."
        }
        else if (computerSelection.toLowerCase() == 'paper') {
            return "It's a Tie! Paper vs Paper."
        }
        else if (computerSelection.toLowerCase() == 'scissors') {
            return "You Lose! Scissors beats Paper."
        }
    }

    if (playerSelection.toLowerCase() == 'scissors') {
        if (computerSelection.toLowerCase() == 'rock') {
            return "You Lose! Rock beats Scissors."
        }
        else if (computerSelection.toLowerCase() == 'paper') {
            return "You Win! Scissors beats Paper."
        }
        else if (computerSelection.toLowerCase() == 'scissors') {
            return "It's a Tie! Scissors vs Scissors."
        }
    }
}

function game(rounds) {
    let playerScore = 0;
    let computerScore = 0

    for (let i=1; i<rounds+1; i++) {
        let playerSelection = prompt('Type Rock, Paper, or Scissors to make your selection!')

        let computerSelection = getComputerChoice();
        let roundResult = playRound(playerSelection, computerSelection);
        console.log(roundResult);

        if (roundResult.includes("Win")) {
            playerScore++;
        }
        else if (roundResult.includes("Lose")) {
            computerScore++;
        }

        console.log("After round "+i+" the score is "+playerScore+" to "+computerScore);
    }

    if (playerScore > computerScore) {
        return "You win by a score of "+playerScore+" to "+computerScore;
    }
    else if (computerScore > playerScore) {
        return "You lose by a score of "+playerScore+" to "+computerScore;
    }
    else {
        return "It's a tie. The score is "+playerScore+" to "+computerScore;
    }

}



const playerSelection = "rock";
const computerSelection = getComputerChoice();


console.log(game(5))