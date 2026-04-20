let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#computer-score");

const resetBtn = document.querySelector(".reset-btn");


/* Computer Random Choice */

const genCompChoice = () => {
const options = ["rock","paper","scissors"];
const randIdx = Math.floor(Math.random()*3);
return options[randIdx];
};


/* Draw */

const drawGame = () => {
msg.innerText = "Game was Draw. Play again!";
};


/* Winner */

const showWinner = (userWin,userChoice,compChoice) => {

if(userWin){
userScore++;
userScorePara.innerText = userScore;
msg.innerText = `You Win! ${userChoice} beats ${compChoice}`;
}

else{
compScore++;
compScorePara.innerText = compScore;
msg.innerText = `Computer Wins! ${compChoice} beats ${userChoice}`;
}

};


/* Main Game */

const playGame = (userChoice) => {

const compChoice = genCompChoice();

if(userChoice === compChoice){
drawGame();
}
else{

let userWin = true;

if(userChoice === "rock"){
userWin = compChoice === "paper" ? false : true;
}

else if(userChoice === "paper"){
userWin = compChoice === "scissors" ? false : true;
}

else{
userWin = compChoice === "rock" ? false : true;
}

showWinner(userWin,userChoice,compChoice);

}

};


/* Click Event */

choices.forEach((choice) => {

choice.addEventListener("click", () => {

const userChoice = choice.getAttribute("id");
playGame(userChoice);

});

});


/* Reset */

resetBtn.addEventListener("click", () => {

userScore = 0;
compScore = 0;

userScorePara.innerText = 0;
compScorePara.innerText = 0;

msg.innerText = "Game Reset! Play again.";

});