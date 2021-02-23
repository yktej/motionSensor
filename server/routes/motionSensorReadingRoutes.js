const express = require("express");
const app = express();
const motionSensorController = require("../controllers/motionSensorController");

app.get("/getSensorReadings", motionSensorController.getMonthlyStatus);

app.post("/filterSensorReadings", motionSensorController.filterSensorLogs);


module.exports = app;
