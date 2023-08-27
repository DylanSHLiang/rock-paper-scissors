const options = document.querySelectorAll("div.choice");

const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

function playRound(player, computer) {
    var result;
    if (player == computer) {
        result = `It's a Draw! Both players chose ${choices[player]}`;
    } else if (
        (player > computer && player - computer == 1) ||
        (computer > player && computer - player == 2)
    ) {
        result = `You Win! ${choices[player]} beats ${choices[computer]}`;
    } else {
        result = `You Lose! ${choices[computer]} beats ${choices[player]}`;
    }
    return result
}

function game() {
    console.log("winner!");
}

