// List of possible moves
const choices = ['rock', 'paper', 'scissors'];

// Function to determine the winner
function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'scissors' && computerChoice === 'paper') ||
        (playerChoice === 'paper' && computerChoice === 'rock')
    ) {
        return "You win!";
    } else {
        return "Computer wins!";
    }
}

// Function to play the game
function playGame(playerChoice) {
    // Randomly choose the computer's move
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    // Display the computer's move
    document.getElementById("computer-move").innerText = `Computer's move: ${computerChoice}`;

    // Determine and display the result
    const result = determineWinner(playerChoice, computerChoice);
    document.getElementById("result").innerText = result;
}
