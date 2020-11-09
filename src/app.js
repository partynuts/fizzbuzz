const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const requireAll = require("require-dir-all");
const cors = require("cors");
const fizzBuzzController = require('./controllers/fizzbuzz-controller')

module.exports = (() => {
  console.log("APP IST DA!");

  app.use(bodyParser.json());

  app.use(cors());
  // app.use(eventsController);

  // const allVals = Object.values(requireAll("./controllers")).forEach(c => app.use(c));
  console.log("HIER");
  console.log(fizzBuzzController)
  app.use(fizzBuzzController);
  return app;
});
