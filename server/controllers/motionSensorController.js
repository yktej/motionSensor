const loginService = require("../services/loginService");
const axios = require('axios');
const sensorLogsModel = require("../models/sensorLogs");
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
       // date:moment(obj.createdAt).format('DD.MM.YYYY'),
        date:add_years(new Date(obj.createdAt),20),
        time:moment(obj.createdAt).format('HH:mm'),
        mode:obj.mode.toLowerCase() === 'on'?'Active':'InActive',
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
    let deletd = await sensorLogsModel.deleteMany({});
    const bulkResponse = await sensorLogsModel.insertMany(data);
    console.log(bulkResponse);
  } catch (err) {
    res.status(200).json({ success: false, message: err });
  }
};


exports.filterSensorLogs = async ({ body }, res) => {

  let criteria = {};
  if(body.mode){
    criteria['mode'] = body.mode;
  }
  if(body.date){
    criteria['date'] = {
      $gte: moment(body.date)
      .startOf("day")
      .toDate(),
        $lte:  moment(body.date)
        .endOf("day")
        .toDate()
    
  };
  }
  try {
    const bulkResponse = await sensorLogsModel.find(criteria);
  console.log(bulkResponse)
  let data = bulkResponse.map(obj => {
    return {
     // date:moment(obj.createdAt).format('DD.MM.YYYY'),
      date:obj.date,
      time:obj.time,
      mode:obj.mode,
      totalOnTime:obj.totalOnTime
    }
  })
  res.status(200).json({ success: true ,data});
} catch (err) {
  res.status(200).json({ success: false, message: err });
}

}

function add_years(dt,n) 
 {
 return new Date(dt.setFullYear(dt.getFullYear() + n));      
 }


module.exports = exports;
