const outcomes = document.querySelectorAll("div.user, div.comp");
const scores = document.querySelectorAll("p.score");
const message = document.querySelector("h1");
const options = document.querySelectorAll("div.choice");
const reset = document.querySelector("button");


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
        scores[0].innerText++;
    } else {
        result = `You Lose! ${choices[computer]} beats ${choices[player]}`;
        scores[1].innerText++;
    }
    if (scores[0].innerText == 5) {
        options.forEach(element => {
            element.style["pointer-events"] = "none"; 
        });
        return "You Win the Game!";
    }
    if (scores[1].innerText == 5) {
        options.forEach(element => {
            element.style["pointer-events"] = "none"; 
        });
        return "You Lose the Game!";
    }
    return result
}

function displayChoices(choice, index) {
    if (choice == 0) {
        outcomes[index].querySelector("img").src = "./images/rock.png";
    } else if (choice == 1) {
        outcomes[index].querySelector("img").src = "./images/paper.png";
    } else {
        outcomes[index].querySelector("img").src = "./images/scissors.png";
    }
    
}

function game(input) {
    item = input.querySelector("img");
    var element;
    if (item) {
        element = item
    } else {
        element = input
    }
    let player = getPlayerChoice(element.id);
    let computer = getComputerChoice();
    displayChoices(player, 0);
    displayChoices(computer, 1);
    outcomes[0].classList.remove("active");
    outcomes[1].classList.remove("active");
    options.forEach(element => {
        element.style["pointer-events"] = "auto"; 
    });
    reset.style["pointer-events"] = "auto";
    message.innerText = playRound(player, computer);
}

function gameStart() {
    outcomes[0].querySelector("img").src = "./images/rock.png";
    outcomes[0].classList.add("active");
    outcomes[1].querySelector("img").src = "./images/rock.png";
    outcomes[1].classList.add("active");
    message.innerText = "Who's to win?";
}

options.forEach(element => {
    element.addEventListener("click", event => {
        gameStart();
        options.forEach(element => {
            element.style["pointer-events"] = "none"; 
        });
        reset.style["pointer-events"] = "none";
        setTimeout(game, 1000, event.target);
    });
});

reset.addEventListener("click", event => {
    options.forEach(element => {
        element.style["pointer-events"] = "auto"; 
    });
    scores[0].innerText = 0;
    scores[1].innerText = 0;
    message.innerText = "First to Five!";
})
