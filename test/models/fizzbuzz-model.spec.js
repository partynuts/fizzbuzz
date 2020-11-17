const request = require("supertest");
const { createArrayOfNumbers, getFizzBuzzString } = require("../../src/models/fizzbuzz-model");
const sinon = require("sinon");
const { expect } = require("chai");

describe('fizzbuzz model', () => {
  describe('createArrayOfNumbers', () => {
    it('should create an array with numbers from 1 to the inserted number', () => {
      expect(createArrayOfNumbers(10)).to.deep.equal(([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
      expect(createArrayOfNumbers(15)).to.deep.equal(([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]));
  });
  });
  describe('getFizzBuzzString', () => {
    it('should replace any number divisible by 3 with the word fizz and any number divisible by 5 with the word buzz if ' +
      'they are not also divisable by 15. Any number divisiable by 15 should be replaced with the word fizzbuzz', () => {
      expect(getFizzBuzzString(15)).to.deep.equal(([1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11,
        'fizz', 13, 14, 'fizzbuzz']));

      expect(getFizzBuzzString(36)).to.deep.equal((
        [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzbuzz', 16, 17, 'fizz', 19,
          'buzz', 'fizz', 22, 23, 'fizz', 'buzz', 26, 'fizz', 28, 29, 'fizzbuzz', 31, 32, 'fizz', 34, 'buzz', 'fizz']));
    });
  });
});
