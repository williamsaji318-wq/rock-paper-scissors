let userScore = 0;
let computerScore = 0;



const startGamePrompt = prompt("type start to begin the game or click cancel to exit the game","");
if (startGamePrompt === "start") {
    playGame();
} else if (startGamePrompt === null) {
    alert("you chose to exit  the game ");
} else {
    alert("please type 'start' to begin the game");
}


function userInput() {
    const userChoice = prompt("TYPE  ROCK or PAPER or SCISSORS (in all caps)");
    if (userChoice === "ROCK" || userChoice === "PAPER" || userChoice === "SCISSORS") {
        return userChoice;
    } else if (userChoice === null) {
        console.log("please refresh you ended the game");
        return;
    } else {
        console.log("ERROR! make sure you typed ROCK or PAPER or SCISSORS (in all caps) ")
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
    } else if ( x === "ROCK" && y === "SCISSORS") {
        return ++userScore;
    } else if (x === "PAPER" && y === "SCISSORS") {
        return ++computerScore;
    } else if (x === "SCISSORS" && y === "PAPER") {
        return ++userScore;
    } else if (x === "ROCK" && y === "ROCK") {
        return "tie";
    } else if (x === "PAPER" && y === "PAPER") {
        return "tie";
    } else if (x === "SCISSORS" && y === "SCISSORS") {
        return "tie";
    }
}
function gameRound() {
    const scoreCAL = findWinner()
    if ( scoreCAL === undefined) {
        return;
    } else if (scoreCAL === "tie") {
        console.log("This round was a tie")
        return "tie";
    } else {
    console.log(`scores of this round:
     USERSCORE- ${userScore} 
     COMPUTERSCORE- ${computerScore}`);
     return scoreCAL;
    }
} function playGame() {
    const z = gameRound();
    if ( z === undefined) {
        return;
    }
    gameRound();
    gameRound();
    gameRound();
    gameRound();
    finalWinner();  
} 

function finalWinner() {
    if (userScore > computerScore) {
        console.log("The User Wins!")
    } else if (userScore === computerScore) {
        console.log("Its a Draw")
    } else {
        console.log("The Computer Wins ")
    }
}
