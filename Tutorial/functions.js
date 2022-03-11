const { isArgumentsObject } = require("util/types");

// functions look like this:
function sum(a, b) {
  return a + b;
}

// anonymous functions
const sum1 = function (a, b) {
  return a + b;
};

// something?
const sum2 = (a = 3, b = 4) => {
  // = variable to use default value, can change if passed
  return a + b;
};

// console.log(sum(3, 4), sum1(3, 4), sum2());

/* //* Immediatly Ivoked Function Expression
an anonymous function between parentheses with a closing () at the end
*/
(function () {
  // return console.log("Wide peeeeppoooo");
})();

const sum3 = (function (a, b) {
  return a + b;
})(3, 4);
// console.log(sum3);

/* //* calback: A function that is passed as an argument to another */

const calc = (op, a, b) => {
  return op(a, b);
};

const sub = (a, b) => {
  return a - b;
};

const sum4 = (a, b) => {
  return a + b;
};

// console.log(calc(sum4, 3, 4), calc(sub, 3, 4));

// const sum5 = () => {
//   let sum = 0;
//   // arguments is an OBJECT
//   console.log(arguments);
//   // return sum;
// };
// ! arguments dont work with the const stuff
function sum5() {
  let sum = 0;
  // ? why did this work?
  // ? in: keys   & of: values
  for (i of arguments) {
    sum += i;
    // console.log(i, typeof i);
  }
  return sum;
}

// console.log(sum5(3, 4, 3));

function sum6(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];
// * Spread operator ...
// console.log(...numbers);
// console.log(sum6(...numbers));

function sizechecker(...args) {
  console.log(args.length);
}
// sizechecker(3, 4, 5, 6);

// * Object Destructuring
