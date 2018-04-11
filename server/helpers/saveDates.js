// THIS IS RAN ONCE TO LOAD IN ALL THE DATES INTO THE COLLECTION
const mongoose = require('./../db/mongoose');
const {DateScore} = require('./../models/dateScore');

const getAllDates = () => {
  const today = new Date();

  const year = today.getFullYear();
  const month = today.getMonth();
  const date = today.getDate();

  for(var i=0; i<250; i++){
    const today=new Date(year, month - 1, date + i);

    const mmmm = today.getMonth();
    const mm = (Number(mmmm) < 10) ? `0${mmmm}` : mmmm;

    const yyyy = today.getFullYear();
    const yy = yyyy.toString().substr(-2);

    const dddd = today.getDate();
    const dd = (Number(dddd) < 10) ? `0${dddd}` : dddd;

    const newDateScore = new DateScore({
      date: `${yy}/${mm}/${dd}`
    });

    newDateScore.save().then((date) => {
      console.log(date.date);
    }).catch((err) => {
      console.log(err);
    });
  }
};

const loadAllDates = () => {
  getAllDates();
};

module.exports = {loadAllDates};
