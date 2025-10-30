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

const getEvenNumbers = (arr) => {
  const evens = arr.filter(even => even % 2 === 0)
  return evens
};


const doubleEveryNumber = (arr) => {
  return arr.map((value) => value * 2)


};
console.log(doubleEveryNumber([1, 2, 3]));

const convertToBooleans = (arr) => {
  return arr.map(currentValue => Boolean(currentValue))


};
console.log(convertToBooleans([1, 2, 3, 0]))

// Create your own Higher Order Functions:
const myForEach = (arr, callback) => {
  for (let i = 0; i < arr.length; i++) {
    const value = arr[i]
    callback(value)
  }

};

const myMap = (arr, transform) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const currVal = arr[i]
    const newVal = transform(currVal)
    newArr.push(newVal)

  }
  return newArr
};

const myFilter = (array, transform) => {
  const newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (transform(array[i])) {
      newArr.push(transform)
    }
  }
  return newArr
};

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
