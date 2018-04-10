const apiUrl = () => {
  return `http://api.sportradar.us/mlb-t6/games/${getDateFormat()}/boxscore.json?api_key=${process.env.API_KEY}`;
};

const getDateFormat = () => {
  const date = new Date();

  const mm = date.getMonth();

  const year = date.getFullYear();
  const yy = year.toString().substr(-2);

  const day = date.getDate();
  const dd = (day < 10) ? `0${day}` : day;

  return `${yy}/${mm}/${dd}`;
};

module.exports = {
  apiUrl,
  getDateFormat
};