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
  },

  createFizzbuzzArray(number) {
    console.log("NUMBER", number)
    let arr = [];
    for (let i = 1; i < number+1; i++) {
      if (i % 3 === 0 && i % 15 !== 0) {
        console.log("NUMBER FIZZ", i+1)
        arr.push('fizz');
        console.log("NUMBER FIZZ", arr[i])
      } else if (i % 5 === 0 && i % 15 !== 0) {
        arr.push('buzz')
        console.log("NUMBER BUZZ", arr[i])
      } else if (i % 15 === 0) {
        arr.push('fizzbuzz')
        console.log("NUMBER FIZZBUZZ", arr[i])
      } else {

        arr.push(i)
        console.log("NUMBER NUMBER", arr[i])
      }
    }
    console.log("ARRAY", arr)

    return arr;
  }
};


