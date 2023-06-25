//Home scoreboard and score
const homeScoreboard = document.querySelector("#homeScore");
let homeScore = 0;
homeScoreboard.textContent = homeScore;

//Away scoreboard and score
const awayScoreboard = document.querySelector("#awayScore");
let awayScore = 0;
awayScoreboard.textContent = awayScore;

//add the home points
const addPointsToHomeTeam= (points) => {
  homeScore += points;
  homeScoreboard.textContent = homeScore;
}
//add the away points
const addPointsToAwayTeam = (points) => {
  awayScore += points;
  awayScoreboard.textContent = awayScore;
}

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
