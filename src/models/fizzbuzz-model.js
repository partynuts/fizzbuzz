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

    numbers.map((number, index) => {
      if (number % 3 === 0 && number % 15 !== 0) {
        numbers.splice(index, 1, 'fizz');
      } else if (number % 5 === 0 && number % 15 !== 0) {
        numbers.splice(index, 1, 'buzz');
      } else if (number % 15 === 0) {
        numbers.splice(index, 1, 'fizzbuzz');
      }
    });

    console.log("NUMBERS STRINGIFIED", numbers);
    return numbers;
  }
};

