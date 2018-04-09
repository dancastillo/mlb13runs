const getDateFormat = () => {
  const date = new Date();

  const mm = date.getMonth();

  const year = date.getFullYear();
  const yy = year.toString().substr(-2);

  const day = date.getDate();
  const dd = (day < 10) ? `0${day}` : day;

  return `${yy}/${mm}/${dd}`;
}

module.exports = {
  getDateFormat
}