const numberToReversedDigits = (number) => {
  const myArr = String(number)
    .split("")
    .map((num) => {
      return Number(num);
    });
  console.log(myArr.reverse());
  return myArr.reverse();
};

module.exports = numberToReversedDigits;
