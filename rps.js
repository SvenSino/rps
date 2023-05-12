
    let rpc = ['rock', 'paper', 'scissors'];
    let randomRPC = rpc[Math.floor(Math.random() * rpc.length)];
    let isInputValid = false;

    let playerSelection;
    let computerSelection;

    function getRandomChoice() {
        let randomNumber = Math.floor(Math.random() * 3)
        switch (randomNumber) {
            case 0:
                return 'ROCK'
            case 1:
                return 'PAPER'
            case 2:
                return 'SCISSORS'
        }
    }

    function getPlayerSelection() {
           return  playerSelection = prompt("Make your choice");
    }

    function getComputerChoice() {
        return getRandomChoice().toLowerCase();
    }

    function playRound(playerSelection, computerChoice) {
            if(playerSelection === computerChoice) {
                return "Its a tie."
            } else if ((computerChoice === "paper" && playerSelection.toLowerCase() === "rock") ||
                (computerChoice === "scissor" && playerSelection.toLowerCase() === "paper") ||
                (computerChoice === "rock" && playerSelection.toLowerCase() === "scissor")){
                return "You loose, " + computerChoice + " beats " + playerSelection;
            } else {
                return "You win. " + playerSelection + " beats " + computerChoice;
        }
    }

    function game() {
        let round = 0;
        while(round < 5) {
            playerSelection = getPlayerSelection().toLowerCase();
             computerSelection = getRandomChoice().toLowerCase();
            console.log("Round: " + round)
            console.log(playRound(playerSelection, computerSelection));
            round++;
        }
    }

