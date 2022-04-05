const sum = function (x, y) {
  return x+y;
}

const substract = function (x, y) {
  return x-y;
}

const multiply = function (x, y) {
  return x*y;
}

const divide = function (x, y) {
  return x/y;
}

const operations = [sum, substract, multiply, divide];

for(let i=0; i<operations.length; i++){
  console.log(operations[i](5,3));
}

const operations2 = {
  sum,
  substract,
  multiply,
  divide
};

const value = operations2.multiply(2,3);
console.log(value)

console.log(this);
