//Home scoreboard and score
const homeScoreboard = document.querySelector("#homeScore");
let homeScore = 0;
homeScoreboard.textContent = homeScore;

//Away scoreboard and score
const awayScoreboard = document.querySelector("#awayScore");
let awayScore = 0;
awayScoreboard.textContent = awayScore;

// Home score buttons
const homeOne = document.querySelector("#plusOneHome");
const homeTwo = document.querySelector("#plusTwoHome");
const homeThree = document.querySelector("#plusThreeHome");
const homeSix = document.querySelector("#plusSixHome");

// Away score buttons
const awayOne = document.querySelector("#plusOneAway");
const awayTwo = document.querySelector("#plusTwoAway");
const awayThree = document.querySelector("#plusThreeAway");
const awaySix = document.querySelector("#plusSixAway");

//event listeners for the home team
homeOne.addEventListener("click", () => {
  homeScore += 1;
  homeScoreboard.textContent = homeScore;
});

homeTwo.addEventListener("click", () => {
  homeScore += 2;
  homeScoreboard.textContent = homeScore;
});

homeThree.addEventListener("click", () => {
  homeScore += 3;
  homeScoreboard.textContent = homeScore;
});

homeSix.addEventListener("click", () => {
  homeScore += 6;
  homeScoreboard.textContent = homeScore;
});

//event listeners for the away team
awayOne.addEventListener("click", () => {
  awayScore += 1;
  awayScoreboard.textContent = awayScore;
});

awayTwo.addEventListener("click", () => {
  awayScore += 2;
  awayScoreboard.textContent = awayScore;
});

awayThree.addEventListener("click", () => {
  awayScore += 3;
  awayScoreboard.textContent = awayScore;
});

awaySix.addEventListener("click", () => {
  awayScore += 6;
  awayScoreboard.textContent = awayScore;
});

//reset the score
const reset = document.querySelector("#reset");
reset.addEventListener("click", () => {
  //home scoreboard
  homeScore = 0;
  homeScoreboard.textContent = homeScore;
  //away scoreboard
  awayScore = 0;
  awayScoreboard.textContent = awayScore;
});
