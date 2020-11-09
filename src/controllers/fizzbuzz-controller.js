const { getFizzBuzzString } = require("../models/fizzbuzz-model");
const { Router } = require("express");
const controller = Router();
console.log("FIZZBUZZ CONTROLLER GEHT")

controller.get('/fizzbuzz/:num', async (req, res) => {
  const result = await getFizzBuzzString(req.params.num);
  console.log("RESULT", result)
  return res.json(result);
});

module.exports = controller;
