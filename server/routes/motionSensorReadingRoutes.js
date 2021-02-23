const express = require("express");
const app = express();
const motionSensorController = require("../controllers/motionSensorController");

app.get("/getSensorReadings", motionSensorController.getMonthlyStatus);


module.exports = app;
