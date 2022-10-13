const humanCatDogYears = (number) => {
  const yearArr = [];
  const catYears = number * 5.6;
  const dogYears = number * 6.4;

  yearArr.push(number, catYears, dogYears);
  return yearArr;
};

module.exports = humanCatDogYears;
