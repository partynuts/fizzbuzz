const { getFizzBuzzString, createFizzbuzzArray } = require("../models/fizzbuzz-model");
const { Router } = require("express");
const controller = Router();

controller.get('/fizzbuzz/:num', async (req, res) => {
  if (req.params.num === Number(req.params.num).toString()) {
    // const result = await getFizzBuzzString(Number(req.params.num));
    if (req.params.num <= 0) {
      return res.status(400).send('Please insert a number bigger than 0!')
    }
    const result = await createFizzbuzzArray(Number(req.params.num));
    console.log("RESULT", result)
    return res.json(result);
  }

  return res.status(400).send('Please insert a number!')
});

module.exports = controller;
