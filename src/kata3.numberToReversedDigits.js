const numberToReversedDigits = (number) => {
  const myArr = String(number)
    .split("")
    .map((num) => {
      return Number(num);
    });
  const newReversedArray = myArr.reverse();
  return newReversedArray;
};

module.exports = numberToReversedDigits;
