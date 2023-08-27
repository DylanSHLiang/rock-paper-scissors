const outcomes = document.querySelectorAll("div.user, div.comp");
const message = document.querySelector("h1");
const options = document.querySelectorAll("div.choice");


const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

function getPlayerChoice(input) {
    if (input == "rock") {
        return 0;
    }
    if (input == "paper") {
        return 1;
    }
    return 2;
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

function game(input) {
    item = input.querySelector("img");
    var element;
    if (item) {
        element = item
    } else {
        element = input
    }
    console.log(playRound(getPlayerChoice(element.id), getComputerChoice()));
}

options.forEach(element => {
    element.addEventListener("click", event => {
        game(event.target);
    });
});

/*
item = element.querySelector("img");
console.log(item);
if (item.id.includes("rock")) {
    console.log(item.id);
}
*/
