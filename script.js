let playerScore = 0;
let computerScore = 0;
const maxScore = 5;
const choices = ['rock', 'paper', 'scissors'];
const emojiChoices = ['🪨', '🧻', '✂️'];

function playRound(playerSelection) {
    // Generate computer's choice (rock, paper, or scissors)
    const choices = ['rock', 'paper', 'scissors'];
    const randomNum = Math.floor(Math.random() * choices.length);
    const computerSelection = choices[randomNum];
    document.getElementById("npc-emoji").textContent = emojiChoices[randomNum];
    const playerSelectionInd = choices.indexOf(playerSelection);
    document.getElementById("player-emoji").textContent = emojiChoices[playerSelectionInd];

    // Determine the winner
    let roundResult;
    if (playerSelection === computerSelection) {
        roundResult = "It's a tie!";
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        playerScore++;
        const capitalizedPlayerString = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
        roundResult = `You win! ${capitalizeString(playerSelection)} beats ${capitalizeString(computerSelection)}.`;
    } else {
        computerScore++;
        roundResult = `You lose! ${capitalizeString(computerSelection)} beats ${capitalizeString(playerSelection)}.`;
    }

    // Update the displayed results and score
    const resultsDiv = document.getElementById('results');
    resultsDiv.textContent = roundResult;

    const scoreDiv = document.getElementById('score');
    scoreDiv.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;

    // Check for a winner
    if (playerScore === maxScore) {
        announceWinner("You");
    } else if (computerScore === maxScore) {
        announceWinner("Computer");
    }
}

function announceWinner(winner) {
    const winnerDiv = document.createElement('div');
    winnerDiv.textContent = `${winner} are the winner of the game!`;
    winnerDiv.style.fontWeight = 'bold';
    winnerDiv.style.fontSize = '18px';
    winnerDiv.style.marginTop = '20px';
    document.body.appendChild(winnerDiv);

    // Disable buttons after a winner is announced
    const buttons = document.getElementsByTagName('button');
    for (const button of buttons) {
        button.disabled = true;
    }
}

// Add event listeners to the buttons
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');

rockButton.addEventListener('click', function () {
    playRound('rock');
});

paperButton.addEventListener('click', function () {
    playRound('paper');
});

scissorsButton.addEventListener('click', function () {
    playRound('scissors');
});

capitalizeString = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}