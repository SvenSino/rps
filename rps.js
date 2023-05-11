
    let rpc = ['rock', 'paper', 'scissors'];
    let randomRPC = rpc[Math.floor(Math.random() * rpc.length)];

    let playerSelection;
    let computerSelection = getComputerChoice();

    function getPlayerSelection() {
         playerSelection = prompt("Make your choice");
         return playerSelection;
    }

    //TODO: Not Random
    function getComputerChoice() {
        return randomRPC;
    }

    //TODO: Shouldnt accept false inptuts
    function playRound(playerSelection, computerChoice) {
        if(playerSelection === computerChoice) {
          return "Its a tie."
        } else if ((computerChoice === "paper" && playerSelection.toLowerCase() === "rock") ||
            (computerChoice === "scissor" && playerSelection.toLowerCase() === "paper") ||
            (computerChoice === "rock" && playerSelection.toLowerCase() === "scissor")){
           return "You loose, " + computerChoice + "beats " + playerSelection;
        } else {
            return "You win."
        }
    }

    function game() {
        let round = 0;
        while(round < 5) {
            playerSelection = getPlayerSelection();
            console.log(playRound(playerSelection, computerSelection));
            round++;
        }
    }

