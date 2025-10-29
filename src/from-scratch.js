// Create callback functions for Higher-Order Functions:
const logEachValue = (arr) => {
  arr.forEach((value, index) => {
    console.log(`Value: ${value}, index: ${index}.`)
  });

}
logEachValue(["a", "b", "c"])

const makePeopleHappy = (arr) => {
  arr.forEach(object => object.isHappy = true)
};

const getEvenNumbers = (arr) => { };

const doubleEveryNumber = () => { };

const convertToBooleans = () => { };

// Create your own Higher Order Functions:
const myForEach = () => { };

const myMap = () => { };

const myFilter = () => { };

const myFind = () => { };

// Use Array.sort() and provide the correct callback sorting function:
module.exports = {
  logEachValue,
  makePeopleHappy,
  getEvenNumbers,
  doubleEveryNumber,
  convertToBooleans,
  myForEach,
  myMap,
  myFind,
  myFilter,
};
