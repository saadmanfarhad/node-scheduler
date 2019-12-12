const cron = require('node-cron');
const express = require('express');

const app = express();


cron.schedule('0 22 * * *', function () {
  const d = new Date();


  let hour = d.getHours().toString();
  if(hour.length === 1){
    hour = '0'+hour;
  }

  let min = d.getMinutes().toString();
  if(min.length === 1){
    min = '0'+min;
  }

  let sec = d.getSeconds().toString();
  if(sec.length === 1){
    sec = '0'+sec;
  }

  console.log('Running everyday at: ' + hour + ':' + min + ':' + sec);
});

app.listen(8000);
