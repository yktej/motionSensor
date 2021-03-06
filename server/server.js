const express = require("express");
var session = require("express-session");
//var redis = require("redis");
//var redisStore = require("connect-redis")(session);
//var redisClient = redis.createClient();
const mongoose = require("mongoose");
const favicon = require("serve-favicon");
const bodyParser = require("body-parser");
const path = require("path");
const config = require("./config.json");
const cors = require("cors");
const dotenv = require("dotenv");
const swaggerUi = require('swagger-ui-express'),
 swaggerDocument = require('./swagger.json');
var logger = require('morgan');
var mqtt=require('mqtt');
var meterReadingService =require('./services/meterReadingsService');
var serviceHelper = require('./helper/serviceHelper');

dotenv.config({
  path:
    __dirname +
    `${
      process.env.APP_MODE === "production"
        ? "/./../.env.production" : (process.env.APP_MODE === "preproduction"
        ? "/./../.env.preproduction"
        : "/./../.env")
    }`,
});
console.log(`Your port is ${process.env.PORT}`);
console.log(`Your NODE_ENV is ${process.env.NODE_ENV}`);

const app = express();
const port = process.env.PORT || 3005;

mongoose.connect(process.env.MONGO_DB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

let db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", function callback() {
  console.log("db connected...!");
 /* app.use(
    session({
      secret: "secret",
      name: "_redisPractice",
      resave: true,
      saveUninitialized: true,
      cookie: { secure: false }, // Note that the cookie-parser module is no longer needed
      store: new redisStore({
        host: "localhost",
        port: 6379,
        client: redisClient,
        ttl: process.env.REDIS_TTL,
      }),
    })
  );*/
app.use(logger('dev'));
//app.use("/api", require("./routes/index"));
app.use("/", require("./routes/index")); // /api configured in nginx




});


db.on("disconnected", function() {
  console.log("db disconnected...!");
});


app.use(
  cors({
    origin: [
      "http://localhost:3000",
    ], //frontend server localhost:3005
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true, // enable set cookie
  })
);

//express server - configure react dist in prod - start

app.use(express.static(path.join(__dirname, 'dist')));

if(1 || process.env.NODE_ENV === 'production') {
 // app.get('/*', function (req, res) {
    app.get('/', function (req, res) {
  // 	res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  res.sendFile(path.resolve('dist/index.html'));
  });
}

///end
const allowCrossDomain = function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
};

app.use(express.json());
//app.use(allowCrossDomain);
app.use(bodyParser.urlencoded({ limit: "50mb", extended: false }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(favicon(path.join(__dirname, "../", "favicon.ico")));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.listen(port, () => {
  console.log("Server is running on port " + port);
});

module.exports = app;
