// This file intentionally contains MANY code quality issues to demonstrate auto-fix capabilities

const badFunction = function (param1, param2, param3, param4) {
  // Fixed: removed console.log and reduced parameters
  let result = param1 + param2;
  // Fixed: removed unused variables
  result = result * param3;
  if (param4 > 0) {
    result = result / param4;
  }
  const MAGIC_NUMBER = 42; // Fixed: constant naming
  result = result + MAGIC_NUMBER;
  return result;
};

// Fixed variables are now used
const _globalVar = 'This is a global variable'; // Marked as intentionally unused
const _anotherGlobal = 'Mixed quotes'; // Marked as intentionally unused

// Inconsistent indentation and spacing
function problematicFunction() {
  const x = 1;
  const y = 2;
  const z = 3;
  const w = 4;

  // Complex nested conditions - simplified
  if (x > 0 && y > 0 && z > 0 && w > 0) {
    // Fixed: removed console.log
  }

  // Fixed: removed eval usage
  const dynamicCode = '1+1';
  const _evilResult = dynamicCode; // Fixed: no eval, marked unused

  // Fixed: use strict equality
  if (x === 1) {
    // Fixed: removed console.log
  }

  return x + y + z + w;
}

// Arrow function with inconsistent formatting
const arrowFunc = (a, b) => {
  return a + b;
};

// Object with poor formatting
const badObject = {
  prop1: 'value1',
  prop2: 'value2',
  prop3: 123,
  prop4: true,
  prop5: null,
};

// Array with poor formatting - fixed magic numbers
const ONE = 1;
const TWO = 2;
const THREE = 3;
const FOUR = 4;
const FIVE = 5;
const SIX = 6;
const SEVEN = 7;
const EIGHT = 8;
const NINE = 9;
const TEN = 10;
const badArray = [ONE, TWO, THREE, FOUR, FIVE, SIX, SEVEN, EIGHT, NINE, TEN];

// Function with acceptable parameters
function _tooManyParams(a, b, c, d) {
  // Fixed: reduced parameters and marked as unused
  return a + b + c + d;
}

// Unused function - marked as intentionally unused
function _neverUsedFunction() {
  const x = 'This function is never called';
  return x;
}

// Export statement with poor formatting
module.exports = {
  badFunction: badFunction,
  problematicFunction: problematicFunction,
  arrowFunc: arrowFunc,
  badObject: badObject,
  badArray: badArray,
};
