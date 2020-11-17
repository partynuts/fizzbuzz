const Fizzbuzz = module.exports = {

  createArrayOfNumbers(number) {
    const numbers = new Array(number);
    for (let i = 0; i < number; i++) {
      numbers[i] = i + 1;
    }

    return numbers;
  },

  getFizzBuzzString(number) {
    const numbers = Fizzbuzz.createArrayOfNumbers(number);

    return numbers.map((number, index) => {
      if (number % 3 === 0 && number % 15 !== 0) {
        return 'fizz'
        // numbers.splice(index, 1, 'fizz');
      } else if (number % 5 === 0 && number % 15 !== 0) {
        return 'buzz'
        // numbers.splice(index, 1, 'buzz');
      } else if (number % 15 === 0) {
        return 'fizzbuzz'
        // numbers.splice(index, 1, 'fizzbuzz');
      }
      return number
    });
  }
};

