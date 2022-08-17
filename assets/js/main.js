/* ------------------------------- Declaring Variables ---------------------------------- */

// Get Radio Buttons
let radioInput = document.forms[0].radiobtn

// Variable for number of total rounds
let roundsNum = 0

// Variable for the current rounds
let currentRound = 0

// Choice Variables
let playerChoice
let computerChoice

// Get Values of Buttons
const btnRock = document.getElementById('btnRock')
const btnPaper = document.getElementById('btnPaper')
const btnScissors = document.getElementById('btnScissors')

// Get p tag to display score
let player = document.getElementById('playerScore')
let computer = document.getElementById('computerScore')

// Get p tag to display round count
let roundsDisplay = document.getElementById('countDisplay')

// Get output field
let resultOutput = document.getElementById('output')

// Variables for the scores
let playerScore = 0
let computerScore = 0

// Variable of Computer's Choice
const computerHands = ['Rock', 'Paper', 'Scissors']

// Variable to get Element of Radio Buttons
const roundsChoice = document.getElementById('roundsChoice')

// Variable to get Element of Round Count
const roundsCount = document.getElementById('roundsCount')



/* ------------------------------- Functions ---------------------------------- */

// Main function onclick buttons "Rock"/"Paper"/"Scissors"
const play = (event) => {

    // Value of player's Choice
    playerChoice = event.target.value
    /* console.log(playerChoice) */

    // Display Rounds
    roundsDisplay.innerHTML = (`${currentRound} / ${roundsNum}`)

    // Remove the radio buttons
    roundsChoice.classList.add("displayNone")

    // Add the Round Counts
    roundsCount.classList.remove("displayNone")

    if (roundsNum == 0) {
        roundsNum = Number(radioInput.value)
        /* console.log(roundsNum) */
    }

    if (currentRound < roundsNum) {
        let randomNum = Math.floor(Math.random() * computerHands.length)
        /* console.log(randomNum) */
        currentRound++
        /* console.log(`Das ist aktuelle Runde ${currentRound}`) */

        computerChoice = computerHands[randomNum]
        switch (compare(playerChoice, computerChoice)) {
            case 0:
                /* console.log('draw') */
                player.innerHTML = playerScore
                computer.innerHTML = computerScore
                break;
            case 1:
                /* console.log('win') */
                playerScore++
                player.innerHTML = playerScore
                computer.innerHTML = computerScore
                break;
            case -1:
                /* console.log('loose') */
                computerScore++
                player.innerHTML = playerScore
                computer.innerHTML = computerScore
                break;
        }

        if (currentRound === roundsNum) {
            play(event)
        }
    }

    else {
        /* console.log('game over') */
        if (playerScore > computerScore) {
            resultOutput.innerHTML = "You won :)"
        }
        else if (playerScore === computerScore) {
            resultOutput.innerHTML = "It's a draw"
        }
        else {
            resultOutput.innerHTML = "You lost :("
        }

        // Disable Buttons
        document.getElementById("btnRock").disabled = true
        document.getElementById("btnPaper").disabled = true
        document.getElementById("btnScissors").disabled = true
    }
}

// Function to compare the values Rock/Paper/Scissors between player and computer
const compare = (playerChoice, computerChoice) => {
    let result = 0
    switch (`${playerChoice}${computerChoice}`) {
        case 'RockRock':
            result = 0
            resultOutput.innerHTML = "It's a draw. You both chose Rock."
            break;
        case 'RockPaper':
            result = -1
            resultOutput.innerHTML = "Paper covers Rock. You loose!"
            break;
        case 'RockScissors':
            result = 1
            resultOutput.innerHTML = "Rock smashes Scissors. You win!"
            break;
        case 'PaperPaper':
            result = 0
            resultOutput.innerHTML = "It's a draw. You both chose Paper."
            break;
        case 'PaperScissors':
            result = -1
            resultOutput.innerHTML = "Scissors cut Paper. You loose!"
            break;
        case 'PaperRock':
            result = 1
            resultOutput.innerHTML = "Paper covers Rock. You win!"
            break;
        case 'ScissorsScissors':
            result = 0
            resultOutput.innerHTML = "It's a draw. You both chose Scissors."
            break;
        case 'ScissorsRock':
            result = -1
            resultOutput.innerHTML = "Rock smashes Scissors. You loose!"
            break;
        case 'ScissorsPaper':
            result = 1
            resultOutput.innerHTML = "Scissors cut Paper. You win!"
            break;
    }
    return result
}

// Function to restart the game onclick "Restart"
const restart = () => {
    // Reset value of variables
    roundsNum = 0
    currentRound = 0
    playerScore = 0
    computerScore = 0

    // Add the radio buttons
    roundsChoice.classList.remove("displayNone")

    // Remove the Round Counts
    roundsCount.classList.add("displayNone")

    // Output
    resultOutput.innerHTML = "Let's play"
    player.innerHTML = playerScore
    computer.innerHTML = computerScore

    // Enable Buttons
    document.getElementById("btnRock").disabled = false
    document.getElementById("btnPaper").disabled = false
    document.getElementById("btnScissors").disabled = false
}
