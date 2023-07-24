function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    const validChoices = ["rock", "paper", "scissors"];
    if (!validChoices.includes(playerSelection)) {
        return "Invalid choice. Please enter 'rock', 'paper', or 'scissors'.";
    }

    if (playerSelection === computerSelection) {
        return "tie";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        return "win";
    } else {
        return "lose";
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let round = 1; round <= 5; round++) {
        const playerChoice = prompt(`Round ${round}: Enter your choice (rock, paper, or scissors):`).toLowerCase();
        const computerChoice = getComputerChoice();

        console.log(`Round ${round} - Computer chose: ${computerChoice}`);

        const result = playRound(playerChoice, computerChoice);

        if (result === "win") {
            playerScore++;
            console.log(`You Win! ${playerChoice.toUpperCase()} beats ${computerChoice.toUpperCase()}`);
        } else if (result === "lose") {
            computerScore++;
            console.log(`You Lose! ${computerChoice.toUpperCase()} beats ${playerChoice.toUpperCase()}`);
        } else {
            console.log("It's a tie!");
        }
    }

    console.log("Game Over!");
    console.log(`Final Score - You: ${playerScore} - Computer: ${computerScore}`);

    if (playerScore > computerScore) {
        console.log("Congratulations! You are the winner!");
    } else if (playerScore < computerScore) {
        console.log("Sorry, you lost the game. Better luck next time!");
    } else {
        console.log("The game is a tie!");
    }
}

// Start the game
game();
