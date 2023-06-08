const add = function(...args) {
  let sum = args.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  return sum;
};

const subtract = function(x, y) {
  return x - y;
};

const sum = function(array) {
  let sum = 0
  for (let i in array) {
    sum += parseInt(array[i], 10);
  };
  return sum;
};

const multiply = function(array) {
  let product = 1
  for (let i in array) {
    product *= parseInt(array[i], 10);
  };
  return product;
};

const power = function(x, y) {
  return x ** y;
};

const factorial = function(number) {
  if (number == 0) {
    return 1;
  }
  else {
    for (let i = number - 1; i > 0; i--) {
      number *= i;
    };
    return number;
  };
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
