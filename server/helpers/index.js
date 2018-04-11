/**
 * @description Returns API url
 */
const apiUrl = () => {
  return `http://api.sportradar.us/mlb-t6/games/${getDateFormat()}/boxscore.json?api_key=${process.env.API_KEY}`;
};

/**
 * @return {string}
 * @description Returns yesterdays date
 */
const getDateFormat = () => {
  const date = new Date();
  const today = formatDate(date);
  
  const dayBefore = new Date(today[0], today[1], today[2]-1);
  const yesterday = formatDate(dayBefore);

  const yy = yesterday[0].toString().substr(-2);
  const mm = yesterday[1]+1;
  const dd = (yesterday[2] < 10) ? `0${yesterday[2]}` : yesterday[2];
  
  return `${yy}/${mm}/${dd}`;
};

/**
 * @param {date} date 
 * @return {array}
 * @description Returns array with [year, month, day]
 */
const formatDate = (date) => {
  const month = date.getMonth();
  const year = date.getFullYear();
  const day = date.getDate();

  return [year, month, day];
};

module.exports = {
  apiUrl,
  getDateFormat
};