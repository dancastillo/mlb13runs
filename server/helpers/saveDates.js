// THIS IS RAN ONCE TO LOAD IN ALL THE DATES INTO THE COLLECTION
const mongoose = require('./../db/mongoose');
const {DateScore} = require('./../models/dateScore');

const getAllDates = () => {
  const today = new Date();

  const year = today.getFullYear();
  const month = today.getMonth();
  const date = today.getDate();

  for(var i=0; i<200; i++){
    const today=new Date(year, month, date + i);

    const mmmm = today.getMonth() + 1;
    const mm = (Number(mmmm) < 10) ? `0${mmmm}` : mmmm;

    const yy = today.getFullYear();

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

const getAllPreviousDates =() => {
  const today = new Date();

  const year = today.getFullYear();
  const month = today.getMonth();
  const date = today.getDate();

  for(var i=1; i<15; i++){
    const today=new Date(year, month, date - i);

    const mmmm = today.getMonth() + 1;
    const mm = (Number(mmmm) < 10) ? `0${mmmm}` : mmmm;

    const yy = today.getFullYear();

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
}

const loadAllDates = () => {
  getAllDates();
  getAllPreviousDates();
};

module.exports = {loadAllDates};
