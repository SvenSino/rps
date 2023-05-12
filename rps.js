
    let rpc = ['rock', 'paper', 'scissors'];
    let randomRPC = rpc[Math.floor(Math.random() * rpc.length)];
    let isInputValid = false;

    let playerSelection;
    let computerSelection = getComputerChoice();

    function randomize() {
        return randomRPC = rpc[Math.floor(Math.random() * rpc.length)];
    }

    function getPlayerSelection() {
           return  playerSelection = prompt("Make your choice");
    }

    function getComputerChoice() {
        return randomize();
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
            playerSelection = getPlayerSelection();
            console.log("Round: " + round)
            randomize();
            console.log(playRound(playerSelection, computerSelection));
            round++;
        }
    }

