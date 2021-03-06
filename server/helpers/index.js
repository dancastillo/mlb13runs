/**
 * @description Returns API url
 */
const apiUrl = () => {
  return `https://api.sportradar.us/mlb/trial/v6.5/en/games/${getDateFormat()}/boxscore.json?api_key=${process.env.API_KEY}`
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
  
  const yy = yesterday[0];
  const mmmm = Number(yesterday[1])+1;
  const mm = (Number(mmmm) < 10) ? `0${mmmm}` : mmmm;
  const dd = (Number(yesterday[2]) < 10) ? `0${yesterday[2]}` : yesterday[2];
  
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