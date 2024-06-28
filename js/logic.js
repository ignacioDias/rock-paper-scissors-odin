let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const arr = ["paper", "rock", "scissors"];
    const choice = Math.floor(Math.random() * 3);
    return arr[choice];
}
function getHumanChoice() {
    const Message = "Ingrese qué desea usar";
    const Default = "e.g.: Rock"
    let value = prompt(Message, Default);
    value = value.toLowerCase();
    if(value !== "rock" && value !== "paper" && value !== "scissors")
        throw new Error("Valor inválido. Inténtalo de nuevo.");
    return value;
}
function playRound(cantGames) {
    let i = 0;
    while(i++ < cantGames) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        if (humanChoice == computerChoice) {
            console.log(`It's a tie! Both chose ${humanChoice}.`);
        } else if (wins(humanChoice, computerChoice)) {
            humanScore++;
            console.log(`You win! ${humanChoice} defeats ${computerChoice}!`);
        } else {
            computerScore++;
            console.log(`You lose! ${computerChoice} defeats ${humanChoice}!`);
        }
    }
    console.log(`Final score - Human: ${humanScore}, Computer: ${computerScore}`);

}
function wins(winner, loser) {
    if ((winner == "scissors" && loser == "paper") ||
        (winner == "paper" && loser == "rock") ||
        (winner == "rock" && loser == "scissors")) {
        return true;
    }
    return false;
}
