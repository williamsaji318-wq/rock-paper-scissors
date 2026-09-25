const startGamePrompt = prompt("type start to begin the game or click cancel to exit the game","");
if (startGamePrompt === "start") {
    
} else if (startGamePrompt === null) {
    alert("you chose to exit  the game ");
} else {
    alert("please type 'start' to begin the game");
}

let userScore = 0;
let computerScore = 0;

function userInput() {
    const userChoice = prompt("TYPE  ROCK or PAPER or SCISSORS (in all caps)");
    if (userChoice === "ROCK" || userChoice === "PAPER" || userChoice === "SCISSORS") {
        return userChoice;
    } else if (userChoice === null) {
        alert("please refresh you ended the game");
        return;
    } else {
        alert("ERROR! make sure you typed ROCK or PAPER or SCISSORS (in all caps) ")
        return;
    }
}

function computerCAL() {
    let valueCAL =   Math.floor((Math.random()*100));
    if ( valueCAL < 33 ) {
        let computerChoice = "ROCK";
        return computerChoice;
    } else if ( valueCAL < 66) {
        let computerChoice = "PAPER";
        return computerChoice;
    } else {
        let computerChoice = "SCISSORS";
        return computerChoice;
    }

}

function findWinner() {
    let x = userInput();
    if (x === undefined) {
        return;
    } 
    let y = computerCAL();
    if (x === "ROCK" && y === "PAPER") {
       return ++computerScore;
    } else if (x === "PAPER" && y === "ROCK") {
        return ++userScore;
    } else if (x === "ROCK" && y === "SCISSORS") {
        return ++userScore;
    } else if (x === "SCISSORS" && y === "ROCK") {
        return ++computerScore;
    }

} 