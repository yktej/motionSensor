const mongoose = require("mongoose");
//const bcrypt = require("bcrypt");

const SensorLogsSchema = mongoose.Schema({
 /* _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: false,
  },*/
  date: {
    type: Date,
    required: true,
  },
  time:{
    type: String,
    required: true,
  },
  mode:{
    type: String,
    required: true,
  },
  totalOnTime:{
    type: String,
   // required: true,
  },
});

const SensorLogs = mongoose.model("sensorLogs",SensorLogsSchema, "SensorLogsSchema");
module.exports = SensorLogs;
