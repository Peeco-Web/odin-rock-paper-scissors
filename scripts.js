// Return a random choice between rock, paper, scissors
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

// Play one round and return the result as a string
function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == 'rock') {
        if (computerSelection.toLowerCase() == 'rock') {
            return "tie"
        }
        else if (computerSelection.toLowerCase() == 'paper') {
            return "lose"
        }
        else if (computerSelection.toLowerCase() == 'scissors') {
            return "win"
        }
    }

    if (playerSelection.toLowerCase() == 'paper') {
        if (computerSelection.toLowerCase() == 'rock') {
            return "win"
        }
        else if (computerSelection.toLowerCase() == 'paper') {
            return "tie"
        }
        else if (computerSelection.toLowerCase() == 'scissors') {
            return "lose"
        }
    }

    if (playerSelection.toLowerCase() == 'scissors') {
        if (computerSelection.toLowerCase() == 'rock') {
            return "lose"
        }
        else if (computerSelection.toLowerCase() == 'paper') {
            return "win"
        }
        else if (computerSelection.toLowerCase() == 'scissors') {
            return "tie"
        }
    }
}

// function game(rounds) {
//     let playerScore = 0;
//     let computerScore = 0

//     for (let i=1; i<rounds+1; i++) {
//         let playerSelection = prompt('Type Rock, Paper, or Scissors to make your selection!')

//         let computerSelection = getComputerChoice();
//         let roundResult = playRound(playerSelection, computerSelection);
//         console.log(roundResult);

//         if (roundResult.includes("Win")) {
//             playerScore++;
//         }
//         else if (roundResult.includes("Lose")) {
//             computerScore++;
//         }

//         console.log("After round "+i+" the score is "+playerScore+" to "+computerScore);
//     }

//     if (playerScore > computerScore) {
//         return "You win by a score of "+playerScore+" to "+computerScore;
//     }
//     else if (computerScore > playerScore) {
//         return "You lose by a score of "+playerScore+" to "+computerScore;
//     }
//     else {
//         return "It's a tie. The score is "+playerScore+" to "+computerScore;
//     }

// }




// Set the initial score
let yourScore = 0;
let computerScore = 0;


const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');

const logRounds = document.querySelector('.logRounds')

const rockComp = document.querySelector('.rockImage')
const paperComp = document.querySelector('.paperImage')
const scissorsComp = document.querySelector('.scissorsImage')


rockButton.addEventListener("click", rockSelect);
paperButton.addEventListener("click", paperSelect);
scissorsButton.addEventListener("click", scissorsSelect);


function gameOver() {
    if (yourScore == 5) {
        alert("Game Over, You Win!")
        location.reload()
    }
    else if (computerScore == 5) {
        alert("Game Over, Computer Wins!")
        location.reload()
    }
    else {
        return
    }
}

function changeComputerImage(compChoice) {
    rockComp.setAttribute("src","images/rockc.jpg")
    paperComp.setAttribute("src","images/paperc.jpg")
    scissorsComp.setAttribute("src","images/scissorsc.jpg")

    if (compChoice == 'Rock') {
        rockComp.setAttribute("src","images/rock.jpg")
    }
    else if (compChoice == 'Paper') {
        paperComp.setAttribute("src","images/paper.jpg")
    }
    else if (compChoice == 'Scissors') {
        scissorsComp.setAttribute("src","images/scissors.jpg")
    }
    return
}


function rockSelect() {

    compChoice = getComputerChoice();
    result = playRound('rock',compChoice);

    changeComputerImage(compChoice);


    if (result == 'win') {
        yourScore++;
        document.querySelector('#yourScore').innerHTML = "Your Score: " + yourScore;
        gameOver()
    }
    else if (result == 'lose') {
        computerScore++;
        document.querySelector('#computerScore').innerHTML = "Computer Score: " + computerScore;
        gameOver()
    }
    

    let p = document.createElement("p");
        logRounds.append(p);
        let roundResult = document.createTextNode(result);
        p.append(roundResult);

    return
}

function paperSelect() {
    compChoice = getComputerChoice();
    result = playRound('paper',compChoice);

    changeComputerImage(compChoice);
    
    if (result == 'win') {
        yourScore++;
        document.querySelector('#yourScore').innerHTML = "Your Score: " + yourScore;
        gameOver()
    }
    else if (result == 'lose') {
        computerScore++;
        document.querySelector('#computerScore').innerHTML = "Computer Score: " + computerScore;
        gameOver()
    }
    let p = document.createElement("p");
        logRounds.append(p);
        let roundResult = document.createTextNode(result);
        p.append(roundResult);

    return
}

function scissorsSelect() {
    compChoice = getComputerChoice();
    result = playRound('scissors',compChoice);

    changeComputerImage(compChoice);


    
    if (result == 'win') {
        yourScore++;
        document.querySelector('#yourScore').innerHTML = "Your Score: " + yourScore;
        gameOver()
        
    }
    else if (result == 'lose') {
        computerScore++;
        document.querySelector('#computerScore').innerHTML = "Computer Score: " + computerScore;
        gameOver()
    }
    let p = document.createElement("p");
        logRounds.append(p);
        let roundResult = document.createTextNode(result);
        p.append(roundResult);

    return
}

