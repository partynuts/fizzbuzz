const request = require("supertest");
const { createArrayOfNumbers, getFizzBuzzString } = require("../../src/models/fizzbuzz-model");
const sinon = require("sinon");
const { expect } = require("chai");
const App = require("../../src/app");


describe('fizzbuzz controller', () => {
  let app;

  beforeEach(async () => {
    app = await App();
  });

  describe('GET /fizzbuzz/:num', () => {
    it('should return an error if inserted data is not a number', async () => {
      await request(app)
        .get("/fizzbuzz/blubber")
        .expect(400)
        .expect('Please insert a number!')
    });
    it('should return an array with the fizzbuzz data', async () => {
      await request(app)
        .get("/fizzbuzz/19")
        .expect(200)
        .expect([1,      2,      'fizz',
          4,      'buzz', 'fizz',
          7,      8,      'fizz',
          'buzz', 11,     'fizz',
          13,     14,     'fizzbuzz',
          16,     17,     'fizz',
          19])
    });
  });
});


//CAMPAIGN_5000001101_DAILY_USER_DATA
