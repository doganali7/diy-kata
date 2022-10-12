const fizzBuzz = (number) => {
  const divisbleToFive = number % 5 === 0;
  const divisbleToTree = number % 3 === 0;

  if (divisbleToFive && divisbleToTree) {
    return "FizzBuzz";
  }
  if (divisbleToFive) {
    return "Buzz";
  }
  if (divisbleToTree) {
    return "Fizz";
  }
  return number;
};
module.exports = fizzBuzz;
