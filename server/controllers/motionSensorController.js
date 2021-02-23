const loginService = require("../services/loginService");
const axios = require('axios');
const moment = require('moment');

exports.getMonthlyStatus = async ({ body }, res) => {
  try {
    let data = await axios.get('http://pir-sensor-demo-dot-virtualeventdemo.el.r.appspot.com/pir-demo/getLog');

    data = data.data;

    let monthlyStatus = {};

    for(let reading of data){
      let createdAt = reading.createdAt;
      let month = moment(createdAt).format("MMM");
      if(monthlyStatus[month]){
        reading.mode === 'ON'? monthlyStatus[month]['on'] += 1 : monthlyStatus[month]['off'] += 1
      }else{
        monthlyStatus[month] = {
          on:0,
          off:0
        }
        reading.mode === 'ON'? monthlyStatus[month]['on'] = 1 : monthlyStatus[month]['off'] = 1
      }
    }

    data.sort(() =>  -1);
    data = data.map(obj => {
      return {
        date:moment(obj.createdAt).format('DD.MM.YYYY'),
        time:moment(obj.createdAt).format('HH:mm'),
        mode:obj.mode,
        totalOnTime:obj.totalOnTime
      }
    })
    let currentMonth = moment().format("MMM");
    let response = {
      success:true,
      monthlyStatus,
      currentMonthActive : monthlyStatus[currentMonth]['on'],
      currentMonthInActive : monthlyStatus[currentMonth]['off'],
      data
    }
    res.status(200).json(response);
    
  } catch (err) {
    res.status(200).json({ success: false, message: err });
  }
};
;



module.exports = exports;
