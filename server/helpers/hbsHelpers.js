
const sortArray = (arry) => {
  return arry.sort((a, b) => {
    return a - b;
  });
};

const scoresLeft = (arryLength) => {
  return Math.abs(14 - arryLength);
};

const sortTeamsByRunsLeft = (teams) => {
  return teams.sort((a, b) => {
    return b.runs.length - a.runs.length;
  });
}

module.exports = {
  sortArray,
  scoresLeft,
  sortTeamsByRunsLeft
};